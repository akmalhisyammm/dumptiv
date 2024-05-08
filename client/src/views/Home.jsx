import { useEffect } from 'react';

import { ProductList } from '../components/organisms';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | DumpTiv';
  }, []);

  return <ProductList />;
};

export default Home;
