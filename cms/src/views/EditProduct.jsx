import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { ProductForm } from '../components/organisms';
import { BASE_API_URL } from '../constants/url';

const EditProduct = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/products/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setProduct(data.data);
      } catch (error) {
        console.error(error);

        if (error.response.data.statusCode === 500) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };

    fetchProduct();
  }, [id, navigate]);

  useEffect(() => {
    document.title = `Edit Product ${product?.id || ''} | DumpTiv CMS`;
  }, [product?.id]);

  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-product-section">
      <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
        <h1 className="display-2">Update Product</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">{product ? <ProductForm {...product} /> : null}</div>
      </div>
    </section>
  );
};

export default EditProduct;
