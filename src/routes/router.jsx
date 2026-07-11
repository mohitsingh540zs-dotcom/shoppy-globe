/* eslint-disable react-refresh/only-export-components*/

import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App";

// Lazy Loaded Pages
const Home = lazy(() => import("../pages/Home"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Success = lazy(() => import("../pages/Success"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
]);

export default router;