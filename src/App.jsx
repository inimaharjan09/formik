import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/RootLayout';
import TodoPage from './pages/todo/TodoPage';
import { RouterProvider } from 'react-router-dom';
import TodoAdd from './pages/todo/TodoAdd';

//import * as Some from './sample';

export default function App() {
  //console.log(Some);
  //console.log(todoSlice);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <TodoPage />
        },
        {
          path:'add-todo',
          element: <TodoAdd />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}
