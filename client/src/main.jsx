import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import Homepage from './pages/homepage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Homepage />,
    children: [
      {
        index: true,
        element: <Homepage />
      }, 
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
