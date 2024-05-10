import { useNavigate } from 'react-router-dom';

import { Image } from '../atoms';

const ProductCard = ({ id, name, description, imgUrl }) => {
  const navigate = useNavigate();

  return (
    <article className="shadow-xl card bg-base-100 image-full h-72">
      <figure>
        <Image src={imgUrl} alt={name} className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
        <div className="justify-end card-actions">
          <button className="btn" onClick={() => navigate(`/products/${id}`)}>
            Show Detail
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
