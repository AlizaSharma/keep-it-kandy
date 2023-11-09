import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// import Homepage from './pages/Candy.jsx'
// import Store from './pages/Contact.jsx'
// import Signin from './pages/Login.jsx'
// import Signup from './pages/Chocolate.jsx'
// import Cart from './pages/Explore.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <div>Not found</div>,       
//   },{
//     path: '/',
//     element: <Homepage />,
//     errorElement: <div>Not found</div>,       
//   },{
//     path: '/store',
//     element: <Store />,
//     errorElement: <div>Not found</div>,
//   },{
//     path: '/signin',
//     element: <Signin />,
//     errorElement: <div>Not found</div>,
//   },{
//     path: '/signup',
//     element: <Signup />,
//     errorElement: <div>Not found</div>,
//   },{
//     path: '/cart',
//     element: <Cart />,
//     errorElement: <div>Not found</div>,
//   }

// ]);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );
