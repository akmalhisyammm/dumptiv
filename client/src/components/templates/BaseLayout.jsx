import { Outlet } from 'react-router-dom';

import { Footer, Navbar } from '../organisms';

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl p-4 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
