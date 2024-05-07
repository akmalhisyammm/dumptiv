import ProductForm from '../organisms/ProductForm';

const EditProductPage = () => {
  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-product-section">
      <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
        <h1 className="display-2">Update Product</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <ProductForm />
        </div>
      </div>
    </section>
  );
};

export default EditProductPage;
