const Sidebar = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" id="sidebar-menu">
      <div className="pt-3 position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="" id="nav-product">
              {' '}
              <span className="icon material-symbols-outlined me-2">shopping_bag</span>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="" id="nav-category">
              {' '}
              <span className="icon material-symbols-outlined me-2">category</span>Categories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="" id="nav-category">
              {' '}
              <span className="icon material-symbols-outlined me-2">account_circle</span>Add User
            </a>
          </li>
        </ul>
        <h6 className="px-3 mt-4 mb-1 sidebar-heading d-flex justify-content-between align-items-center text-muted text-uppercase">
          <span>Account</span>
        </h6>
        <ul className="mb-2 nav flex-column">
          <li className="nav-item">
            <a className="nav-link">
              {' '}
              <span className="icon material-symbols-outlined me-2">person</span>Hej,{' '}
              <span id="username">Hacktiv8!</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="" id="nav-logout">
              {' '}
              <span className="icon material-symbols-outlined me-2">logout</span>Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
