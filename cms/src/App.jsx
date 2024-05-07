import { Navbar, Sidebar } from './components/organisms';
import {
  AddProductPage,
  AddStaffPage,
  CategoriesPage,
  EditImagePage,
  EditProductPage,
  LoginPage,
  ProductsPage,
} from './components/templates';

const App = () => {
  return (
    <>
      {/* <div id="preloader" style="display: none">
        <div className="loading">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_remmdtqv.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div> */}

      <Navbar />
      <LoginPage />

      <section className="container-fluid" id="home-section">
        <div className="row">
          <Sidebar />
          <ProductsPage />
          <AddProductPage />
          <EditProductPage />
          <EditImagePage />
          <CategoriesPage />
          <AddStaffPage />
        </div>
      </section>
    </>
  );
};

export default App;
