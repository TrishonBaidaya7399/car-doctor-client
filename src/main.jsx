import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Routes/Root';
import Home from './assets/Pages/Home/Home';
import ErrorPage from './assets/Error/Error';
import Login from './assets/Pages/Login/Login';
import SignUp from './assets/Pages/SignUp/SignUp';
import AuthProvider from './assets/Providers/AuthProvider';
import CheckOut from './assets/Pages/CheckOut/CheckOut';
import AddService from './assets/Pages/AddService/AddService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/checkout/:id',
        element: <CheckOut/>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/addService',
        element: <AddService/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
