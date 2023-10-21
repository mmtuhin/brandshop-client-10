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
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/brand')
            
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/myCart/:email',
          element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
          loader: ({params}) => fetch(`https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/myCart/${params.email}`)
        },
        {
          path: '/upcoming',
          element: <Upcoming></Upcoming>,
          loader: () => fetch('https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/upcoming')
        },
        {
          path: '/trending',
          element: <Trending></Trending>,
          loader:() => fetch('https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/trending')
        },
        {
          path: '/addProduct',
          element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>,
          loader: () => fetch('https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/brand')
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
          loader: ({params}) => fetch(`https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/brandProducts/${params.brandName}`)
        },
        {
          path: '/productDetails/:productId',
          element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
          loader: ({params}) => fetch(`https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/productDetails/${params.productId}`)
        },
        {
          path: '/updateProduct/:productId',
          element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
          loader: ({params}) => fetch(`https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/updateProduct/${params.productId}`)
        }
      ]
      
    },
  ]);

export default router;