import { ProductCard } from '../molecules';

const ProductList = () => {
  return (
    <section className="flex flex-col max-w-screen-xl gap-4 p-4 mx-auto">
      <div className="flex gap-2">
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
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
          title="iPhone 15 Pro"
          description="Titanium. So strong. So light. So Pro"
          imgUrl="https://cdn.eraspace.com/media/catalog/product/m/a/macbook_pro_16-inch_m3_pro_max_space_black_1_5.jpg"
        />
        <ProductCard
          title="iPhone 15 Pro"
          description="Titanium. So strong. So light. So Pro"
          imgUrl="https://cdn.eraspace.com/media/catalog/product/m/a/macbook_pro_16-inch_m3_pro_max_space_black_1_5.jpg"
        />
        <ProductCard
          title="iPhone 15 Pro"
          description="Titanium. So strong. So light. So Pro"
          imgUrl="https://cdn.eraspace.com/media/catalog/product/m/a/macbook_pro_16-inch_m3_pro_max_space_black_1_5.jpg"
        />
        <ProductCard
          title="iPhone 15 Pro"
          description="Titanium. So strong. So light. So Pro"
          imgUrl="https://cdn.eraspace.com/media/catalog/product/m/a/macbook_pro_16-inch_m3_pro_max_space_black_1_5.jpg"
        />
      </div>
      <div className="mx-auto join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </section>
  );
};

export default ProductList;
