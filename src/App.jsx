import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/RootLayout';
import { RouterProvider } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/SignUp';
import HomePage from './features/home/HomePage';
import AdminPage from './features/admin/AdminPage';
import ProductAddForm from './features/admin/ProductAddForm';
import ProductEdit from './features/admin/ProductEdit';
import Product from './features/products/Product';
import CartPage from './features/carts/CartPage';
import ProfileMainPage from './features/user/ProfileMainPage';
import OrderDetail from './features/orders/OrderDetail';

export default function App() {

  const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <Login /> },
      { path: 'sign-up', element: <SignUp /> },

      // Admin Routes
      { path: 'admin/dashboard', element: <AdminPage /> },
      { path: 'admin/products/add', element: <ProductAddForm /> },
      { path: 'admin/products/edit/:id', element: <ProductEdit /> },

      // Product & Cart
      { path: 'products/:id', element: <Product /> },
      { path: 'cart', element: <CartPage /> },

      // User Profile
      { path: 'user/profile', element: <ProfileMainPage /> },

      // Orders
      { path: 'orders/:id', element: <OrderDetail /> },
    ],
  },
]);
  return <RouterProvider router={router} />
}