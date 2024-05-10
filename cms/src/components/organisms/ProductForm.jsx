import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { Button } from '../atoms';
import { BASE_API_URL } from '../../constants/url';

const ProductForm = ({ id, name, categoryId, description, stock, price, imgUrl }) => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: name || '',
    categoryId: categoryId || '',
    description: description || '',
    stock: stock || 0,
    price: price || 0,
    imgUrl: imgUrl || '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (id) {
        await axios.put(`${BASE_API_URL}/products/${id}`, form, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        toast.success('Successfully updated product', { position: 'bottom-right' });
      } else {
        await axios.post(`${BASE_API_URL}/products`, form, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        toast.success('Successfully added new product', { position: 'bottom-right' });
      }

      navigate('/products');
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
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/categories`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setCategories(data.data);
      } catch (error) {
        toast.error(error.response.data.error, { position: 'bottom-right' });

        if (error.response.data.statusCode === 500) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };

    fetchCategories();
  }, [navigate]);

  if (isLoading) return <img src="/happy-pikachu.gif" alt="Loading" width={120} />;

  return (
    <form id="product-form" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="product-name">
          Name <span className="text-danger fw-bold">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="product-name"
          placeholder="Enter product name"
          autoComplete="off"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="product-category">
          Category <span className="text-danger fw-bold">*</span>
        </label>
        <select
          id="product-category"
          className="form-select"
          required
          value={form.categoryId}
          onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
        >
          <option value="" disabled>
            -- Select Category --
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="product-desc">
          Description <span className="text-danger fw-bold">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="product-desc"
          placeholder="Enter product description"
          autoComplete="off"
          required
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="product-stock">
              Stock <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="product-stock"
              placeholder="Enter product stock"
              autoComplete="off"
              required
              value={form.stock || ''}
              onChange={(e) => setForm({ ...form, stock: +e.target.value })}
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="product-price">
              Price <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="product-price"
              placeholder="Enter product price"
              autoComplete="off"
              required
              value={form.price || ''}
              onChange={(e) => setForm({ ...form, price: +e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="product-image">Image</label>
        <input
          type="text"
          className="form-control"
          id="product-image"
          placeholder="Enter product image url"
          autoComplete="off"
          value={form.imgUrl}
          onChange={(e) => setForm({ ...form, imgUrl: e.target.value })}
        />
      </div>
      <div className="mb-3 row">
        <div className="col-6">
          <Button accent="secondary" onClick={() => navigate('/products')}>
            Cancel
          </Button>
        </div>
        <div className="col-6">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
