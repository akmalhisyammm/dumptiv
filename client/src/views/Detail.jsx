import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../constants/url';
import { Image } from '../components/atoms';
import { toRupiah } from '../utils/currency';

const Detail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/products/${id}`);

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
      <div className="flex flex-col gap-4 sm:flex-row">
        <Image
          src={product.imgUrl}
          alt={product.name}
          className="w-full rounded-xl sm:w-96 h-fit"
        />
        <div className="prose">
          <h4>Description</h4>
          <p>{product.description}</p>
          <h4>Price</h4>
          <p>{toRupiah(product.price)}</p>
          <h4>Stock</h4>
          <p>{product.stock}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
