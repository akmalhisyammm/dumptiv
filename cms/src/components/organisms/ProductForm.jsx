import { Button } from '../atoms';

const ProductForm = () => {
  return (
    <form id="product-form">
      <div className="mb-3">
        <label htmlFor="product-name">
          Name <span className="text-danger fw-bold">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="product-name"
          placeholder="Enter product name"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="product-category">
          Category <span className="text-danger fw-bold">*</span>
        </label>
        <select id="product-category" defaultValue="" className="form-select" required>
          <option value="" disabled>
            -- Select Category --
          </option>
          <option value="1">Furniture</option>
          <option value="2">Workspace</option>
          <option value="3">Storage</option>
          <option value="4">Textile</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="product-desc">
          Description <span className="text-danger fw-bold">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="product-desc"
          placeholder="Enter product description"
          autoComplete="off"
          required
        />
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="product-stock">
              Stock <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="product-stock"
              placeholder="Enter product stock"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="product-price">
              Price <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="product-price"
              placeholder="Enter product price"
              autoComplete="off"
              required
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="product-image">Image</label>
        <input
          type="text"
          className="form-control"
          id="product-image"
          placeholder="Enter product image url"
          autoComplete="off"
        />
      </div>
      <div className="mb-3 row">
        <div className="col-6">
          <Button mode="secondary">Cancel</Button>
        </div>
        <div className="col-6">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
