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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M14 8a.75.75 0 0 1-.75.75H4.56l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
            clipRule="evenodd"
          />
        </svg>
        Back to Home
      </Link>
      {product || isLoading ? (
        <ProductDetail isLoading={isLoading} {...product} />
      ) : (
        <>
          <img src="/angry-pikachu.gif" alt="Not Found" width={200} className="mx-auto" />
          <p className="font-bold text-center">404 | Not Found</p>
        </>
      )}
    </section>
  );
};

export default Detail;
