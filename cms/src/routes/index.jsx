import { createBrowserRouter, redirect } from 'react-router-dom';

import { BaseLayout } from '../components/templates';
import Login from '../views/Login';
import Products from '../views/Products';
import AddProduct from '../views/AddProduct';
import EditProduct from '../views/EditProduct';
import EditProductImage from '../views/EditProductImage';
import Categories from '../views/Categories';
import AddStaff from '../views/AddStaff';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => (localStorage.getItem('token') ? redirect('/products') : redirect('/login')),
  },
  {
    path: '/login',
    element: <Login />,
    loader: () => (localStorage.getItem('token') ? redirect('/products') : null),
  },
  {
    element: <BaseLayout />,
    loader: () => (localStorage.getItem('token') ? null : redirect('/login')),
    children: [
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/add',
        element: <AddProduct />,
      },

      {
        path: '/products/edit/:id',
        element: <EditProduct />,
      },
      {
        path: '/products/edit/:id/image',
        element: <EditProductImage />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/users/add',
        element: <AddStaff />,
      },
    ],
  },
]);

export default router;
