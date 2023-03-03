import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from "./pages/Profile"
import Login from './pages/Login';
import TokenProvider from './components/TokenProvider';
import ProtectedRoute from './components/ProtectedRoute';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "*",
        element: <NotFound/>
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/profile",
        element: <ProtectedRoute><Profile/></ProtectedRoute>,
        

      }

    ]

  },
 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TokenProvider>
  <RouterProvider router={routes} />
    </TokenProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
