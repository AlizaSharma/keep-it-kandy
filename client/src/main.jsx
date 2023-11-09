import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import Homepage from './pages/homepage.jsx'
import Store from './pages/store.jsx'
import Signin from './pages/sign-in.jsx'
import Signup from './pages/sign-up.jsx'
import Cart from './pages/cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,       
  },{
    path: '/',
    element: <Homepage />,
    errorElement: <div>Not found</div>,       
  },{
    path: '/store',
    element: <Store />,
    errorElement: <div>Not found</div>,
  },{
    path: '/signin',
    element: <Signin />,
    errorElement: <div>Not found</div>,
  },{
    path: '/signup',
    element: <Signup />,
    errorElement: <div>Not found</div>,
  },{
    path: '/cart',
    element: <Cart />,
    errorElement: <div>Not found</div>,
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
