import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../constants/url';

const Detail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productUrl = new URL(`${API_URL}/products/${id}`);

        const { data } = await axios.get(productUrl);

        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    document.title = `${product.name || ''} | DumpTiv`;
  }, [product.name]);

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="flex gap-4">
        <img src={product.imgUrl} alt={product.name} className="rounded-xl w-96" />
        <div className="prose">
          <h4>Description</h4>
          <p>{product.description}</p>
          <h4>Price</h4>
          <p>
            {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
              product.price
            )}
          </p>
          <h4>Stock</h4>
          <p>{product.stock}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
