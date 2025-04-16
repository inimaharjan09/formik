import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/RootLayout';
import { RouterProvider } from 'react-router-dom';
// import BlogList from './features/product/blog/BlogList';
import AddBlog from './features/product/blog/AddBlog';
import ProductList from './features/product/ProductList';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index:true,
          element: <ProductList/>
        },
        // {
        //   path: 'add-blog',
        //   element: <AddBlog />
        // },
      ]
    }
  ]);
  return <RouterProvider router={router} />
}