import React from 'react'

import { createBrowserRouter } from "react-router-dom";
const LazyMain = React.lazy(() => import('../../Layout/Main'));
// import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ProductDetails from "../../Pages/Home/ProductDetails/ProductDetails";
import Products from "../../Pages/Home/Products/Products";
import Search from "../../Pages/Home/Search/Search";
import Loader from "../../Loader/Loader";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <React.Suspense fallback={<Loader />}><LazyMain /></React.Suspense>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:category',
                element: <Products></Products>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/search',
                element: <Search></Search>
            }
        ]
    }
])