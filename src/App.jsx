import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/RootLayout';
import TodoPage from './pages/todo/TodoPage';
import { RouterProvider } from 'react-router-dom';
import TodoAdd from './pages/todo/TodoAdd';
import TodoEdit from './pages/todo/TodoEdit';


export default function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        
      ]
    }
  ]);
  return <RouterProvider router={router} />
}