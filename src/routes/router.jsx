import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

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
            }
        ],
    },
]);

export default router;