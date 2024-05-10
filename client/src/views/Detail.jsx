import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { API_URL } from '../constants/url';
import { ProductDetail } from '../components/organisms';

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`${API_URL}/products/${id}`);

        setProduct(data.data);
      } catch (error) {
        toast.error(error.response.data.error, { position: 'bottom-right' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    document.title = `${product?.name || ''} | Dumptiv`;
  }, [product?.name]);

  return (
    <section className="flex flex-col gap-2">
      <Link to="/" className="btn w-fit">
        Back to Home
      </Link>
      {product || isLoading ? (
        <ProductDetail isLoading={isLoading} {...product} />
      ) : (
        <>
          <img src="/angry-pikachu.gif" alt="404" width={200} className="mx-auto" />
          <p className="font-bold text-center">404 | Not Found</p>
        </>
      )}
    </section>
  );
};

export default Detail;
