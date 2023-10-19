import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyCart from "../pages/MyCart/MyCart";
import Upcoming from "../pages/Upcoming/Upcoming";
import Trending from "../pages/Trending/Trending";
import AddProduct from "../pages/AddProduct/AddProduct";
import Registration from "../pages/Registration/Registration";
import PrivateRouter from "./PrivateRouter";
import AddBrand from "../pages/AddBrand/AddBrand";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:4444/brand')
            
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/myCart',
          element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
          loader: () => fetch('http://localhost:4444/cart')
        },
        {
          path: '/upcoming',
          element: <Upcoming></Upcoming>,
          loader: () => fetch('http://localhost:4444/upcoming')
        },
        {
          path: '/trending',
          element: <Trending></Trending>,
          loader:() => fetch('http://localhost:4444/trending')
        },
        {
          path: '/addProduct',
          element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>,
          loader: () => fetch('http://localhost:4444/brand')
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path:'/addBrand',
          element: <PrivateRouter><AddBrand></AddBrand></PrivateRouter>,
        },
        {
          path: '/brandProducts/:brandName',
          element: <BrandProducts></BrandProducts>,
          loader: ({params}) => fetch(`http://localhost:4444/brandProducts/${params.brandName}`)
        },
        {
          path: '/productDetails/:productId',
          element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
          loader: ({params}) => fetch(`http://localhost:4444/productDetails/${params.productId}`)
        },
        {
          path: '/updateProduct/:productId',
          element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
          loader: ({params}) => fetch(`http://localhost:4444/updateProduct/${params.productId}`)
        }
      ]
      
    },
  ]);

export default router;