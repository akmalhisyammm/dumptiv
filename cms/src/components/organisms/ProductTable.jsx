import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { Image } from '../atoms';
import { ActionButtons } from '../molecules';
import { BASE_API_URL } from '../../constants/url';
import { toRupiah } from '../../utils/currency';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleDeleteProduct = async (id) => {
    try {
      setIsLoading(true);

      await axios.delete(`${BASE_API_URL}/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const newProducts = products.filter((product) => product.id !== id);

      toast.success('Successfully deleted product', { position: 'bottom-right' });
      setProducts(newProducts);
    } catch (error) {
      toast.error(error.response.data.error, { position: 'bottom-right' });

      if (error.response.data.statusCode === 500) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/products`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setProducts(data.data);
      } catch (error) {
        toast.error(error.response.data.error, { position: 'bottom-right' });

        if (error.response.data.statusCode === 500) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };

    fetchProducts();
  }, [navigate]);

  return (
    <table className="table align-middle">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col" width="180px">
            Image
          </th>
          <th scope="col" width="250px">
            Description
          </th>
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
          <th scope="col">Author</th>
          <th scope="col" width="50px"></th>
        </tr>
      </thead>
      <tbody id="table-product">
        {!isLoading ? (
          products.map((product, index) => (
            <tr key={product.id}>
              <td scope="row">#{index + 1}</td>
              <td className="fw-bold">{product.name}</td>
              <td>
                <Image src={product.imgUrl} alt={product.name} className="img-fluid" />
              </td>
              <td>{product.description}</td>
              <td>{product.stock}</td>
              <td className="fw-bold">{toRupiah(product.price)}</td>
              <td>{product.User.email}</td>
              <td>
                <ActionButtons
                  editPath={`/products/edit/${product.id}`}
                  editImagePath={`/products/edit/${product.id}/image`}
                  onDelete={() => handleDeleteProduct(product.id)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={8} className="text-center">
              <img src="/happy-pikachu.gif" alt="Loading" width={120} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
