import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './pages/Login.jsx';
import Shop from './pages/Shop.jsx';
import Contact from './pages/Contact.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/shop',
    element: <Shop />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/explore',
    element: <App />,
    errorElement: <div>Not found</div>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
