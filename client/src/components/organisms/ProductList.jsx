import { ProductCard } from '../molecules';

const ProductList = ({ data, maxLength, isLoading }) => {
  return (
    <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {!isLoading
        ? data.map((product) => <ProductCard key={product.id} {...product} />)
        : [...Array(+maxLength)].map((_, index) => (
            <div key={index} className="w-full h-72 skeleton" />
          ))}
    </article>
  );
};

export default ProductList;
