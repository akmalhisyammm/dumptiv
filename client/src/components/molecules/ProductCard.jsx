const ProductCard = ({ title, description, imgUrl }) => {
  return (
    <div className="shadow-xl card bg-base-100 image-full">
      <figure>
        <img src={imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="justify-end card-actions">
          <button className="rounded-full btn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
