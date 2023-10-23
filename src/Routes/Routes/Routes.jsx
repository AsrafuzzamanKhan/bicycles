import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ProductDetails from "../../Pages/Home/ProductDetails/ProductDetails";

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
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>
            }
        ]
    }
])