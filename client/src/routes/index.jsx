import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout } from '../components/templates';
import Home from '../views/Home';
import Detail from '../views/Detail';

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <Detail />,
      },
    ],
  },
]);

export default router;
