import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../../constants/url';
import { ProductCard } from '../molecules';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsUrl = new URL(`${API_URL}/products`);
        const categoriesUrl = new URL(`${API_URL}/categories`);

        searchParams.get('q')
          ? productsUrl.searchParams.append('q', searchParams.get('q'))
          : productsUrl.searchParams.delete('q');
        searchParams.get('i')
          ? productsUrl.searchParams.append('i', searchParams.get('i'))
          : productsUrl.searchParams.delete('i');
        searchParams.get('sort')
          ? productsUrl.searchParams.append('sort', searchParams.get('sort'))
          : productsUrl.searchParams.delete('sort');
        searchParams.get('page')
          ? productsUrl.searchParams.append('page', searchParams.get('page'))
          : productsUrl.searchParams.delete('page');

        const { data: products } = await axios.get(productsUrl);
        const { data: categories } = await axios.get(categoriesUrl);

        setProducts(products.data.query);
        setCategories(categories.data);
        setPagination(products.data.pagination);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [searchParams]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 md:flex-row">
        <label className="flex items-center w-full gap-2 input input-bordered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) =>
              setSearchParams({ ...Object.fromEntries(searchParams), q: e.target.value })
            }
          />
        </label>
        <div className="flex gap-2 min-w-96">
          <select
            className="w-full select select-bordered"
            defaultValue=""
            onChange={(e) =>
              setSearchParams({ ...Object.fromEntries(searchParams), i: e.target.value })
            }
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            className="w-full select select-bordered"
            defaultValue=""
            onChange={(e) =>
              setSearchParams({ ...Object.fromEntries(searchParams), sort: e.target.value })
            }
          >
            <option value="">Sort by</option>
            <option value="DESC">Latest</option>
            <option value="ASC">Oldest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="mx-auto join">
        {[...Array(pagination.totalPage)].map((_, index) => (
          <button
            key={index}
            className={`join-item btn ${pagination.currentPage === index + 1 && 'btn-active'}`}
            onClick={() =>
              setSearchParams({ ...Object.fromEntries(searchParams), page: index + 1 })
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
