import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ProductDetails from "../../Pages/Home/ProductDetails/ProductDetails";
import Products from "../../Pages/Home/Products/Products";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:id',
                element: <Products></Products>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>
            }
        ]
    }
])