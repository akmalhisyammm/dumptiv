import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { API_URL } from '../constants/url';
import { ProductList } from '../components/organisms';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q') || '';
  const i = searchParams.get('i') || '';
  const sort = searchParams.get('sort') || 'DESC';
  const page = searchParams.get('page') || 1;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const { data: products } = await axios.get(
          `${API_URL}/products?q=${q}&i=${i}&sort=${sort}&page=${page}`
        );
        const { data: categories } = await axios.get(`${API_URL}/categories`);

        setProducts(products.data.query);
        setCategories(categories.data);
        setPagination(products.data.pagination);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [q, i, sort, page]);

  useEffect(() => {
    document.title = 'Home | Dumptiv';
  }, []);

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
            value={q}
            onChange={(e) =>
              setSearchParams({ ...Object.fromEntries(searchParams), q: e.target.value })
            }
          />
        </label>
        <div className="flex flex-col gap-2 sm:flex-row min-w-fit sm:min-w-96">
          <select
            className="w-full select select-bordered"
            value={i}
            onChange={(e) =>
              setSearchParams({ ...Object.fromEntries(searchParams), i: e.target.value })
            }
          >
            <option value="">All category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            className="w-full select select-bordered"
            value={sort}
            onChange={(e) =>
              setSearchParams({ ...Object.fromEntries(searchParams), sort: e.target.value })
            }
          >
            <option value="DESC">Latest</option>
            <option value="ASC">Oldest</option>
          </select>
        </div>
      </div>

      {products.length || isLoading ? (
        <ProductList data={products} isLoading={isLoading} />
      ) : (
        <div>
          <img src="/angry-pikachu.gif" alt="404" width={200} className="mx-auto" />
          <p className="font-bold text-center">No products found</p>
        </div>
      )}

      <div className="mx-auto join">
        {[...Array(pagination?.totalPage || 0)].map((_, index) => (
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

export default Home;
