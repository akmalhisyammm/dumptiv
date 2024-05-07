const CategoriesPage = () => {
  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="category-section">
      <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
        <h1 className="display-2">Categories</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody id="table-category">
              <tr>
                <td scope="row">#1</td>
                <td className="fw-bold">Furniture</td>
              </tr>
              <tr>
                <td scope="row">#2</td>
                <td className="fw-bold">Workspace</td>
              </tr>
              <tr>
                <td scope="row">#3</td>
                <td className="fw-bold">Storage</td>
              </tr>
              <tr>
                <td scope="row">#4</td>
                <td className="fw-bold">Textile</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
