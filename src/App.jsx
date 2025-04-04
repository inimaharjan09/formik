import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/RootLayout';
import TodoPage from './pages/todo/TodoPage';
import { RouterProvider } from 'react-router-dom';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <TodoPage />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}
