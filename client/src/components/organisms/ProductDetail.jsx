import { Image } from '../atoms';
import { toRupiah } from '../../utils/currency';

const ProductDetail = ({ name, description, stock, price, imgUrl, isLoading }) => {
  return (
    <div className="flex flex-col gap-4 py-4">
      {!isLoading ? (
        <>
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Image src={imgUrl} alt={name} className="w-full rounded-xl sm:w-96 h-fit" />
            <div className="prose">
              <h4>Description</h4>
              <p>{description}</p>
              <h4>Price</h4>
              <p>{toRupiah(price)}</p>
              <h4>Stock</h4>
              <p>{stock}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-64 h-8 skeleton" />
          <div className="flex flex-col w-full gap-4 md:flex-row">
            <div className="w-full h-72 skeleton" />
            <div className="flex flex-col w-full gap-4">
              <div className="w-64 h-4 skeleton" />
              <div className="w-full h-4 skeleton" />
              <div className="w-64 h-4 skeleton" />
              <div className="w-full h-4 skeleton" />
              <div className="w-64 h-4 skeleton" />
              <div className="w-full h-4 skeleton" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
