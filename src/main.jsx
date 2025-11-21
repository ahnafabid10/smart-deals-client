import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './RootLayout/RootLayout.jsx';
import Home from './Components/Home/Home.jsx';
import AllProducts from './Components/AllProducts/AllProducts.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Register from './Components/Register/Register.jsx';
import MyProducts from './Components/MyProducts/MyProducts.jsx';
import MyBids from './Components/MyBids/MyBids.jsx';
import PrivateRoutes from './Context/PrivateRoutes.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/allProducts',
        Component: AllProducts
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/myProducts',
        element: <PrivateRoutes>
          <MyProducts></MyProducts>
        </PrivateRoutes>
      },
      {
        path: '/myBids',
        element: <PrivateRoutes>
          <MyBids></MyBids>
        </PrivateRoutes>
      },
      {
        path:"/productDetails/:id",
        loader: ({params}) =>fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>
)
