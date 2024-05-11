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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
              <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
