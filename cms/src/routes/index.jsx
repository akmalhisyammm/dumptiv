import { createBrowserRouter, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    loader: () => {
      if (!localStorage.getItem('token')) {
        toast.error('Please login first', { position: 'bottom-right' });
        return redirect('/login');
      }
      return redirect('/products');
    },
  },
  {
    path: '/login',
    element: <Login />,
    loader: () => {
      if (localStorage.getItem('token')) {
        toast.error('You already logged in', { position: 'bottom-right' });
        return redirect('/products');
      }
      return null;
    },
  },
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.getItem('token')) {
        toast.error('Please login first', { position: 'bottom-right' });
        return redirect('/login');
      }
      return null;
    },
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
