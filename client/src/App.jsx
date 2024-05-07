import { Footer, Navbar } from './components/organisms';
import { DetailPage, HomePage } from './components/templates';

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <HomePage />
        <DetailPage />
      </main>

      <Footer />
    </>
  );
};

export default App;
