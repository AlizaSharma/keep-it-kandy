import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Candy from './pages/Candy.jsx'
import Chocolate from './pages/Chocolate.jsx'
import Contact from './pages/Contact.jsx'
import Explore from './pages/Explore.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/candy',
    element: <Candy />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/chocolate',
    element: <Chocolate />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/explore',
    element: <Explore />,
    errorElement: <div>Not found</div>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
