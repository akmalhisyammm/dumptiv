import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { BASE_API_URL } from '../constants/url';
import { ImageForm } from '../components/organisms';

const EditProductImage = () => {
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
    document.title = `Edit Product Image ${product?.id || ''} | DumpTiv CMS`;
  }, [product?.id]);

  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="update-product-section">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="pt-3 pb-2 mb-3">{product ? <ImageForm {...product} /> : null}</div>
        </div>
      </div>
    </section>
  );
};

export default EditProductImage;
