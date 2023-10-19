import { useLoaderData } from "react-router-dom";

import SingleCartProduct from "../../components/SingleCartProduct/SingleCartProduct";
import { useState } from "react";


const MyCart = () => {
    const loadedCartProducts = useLoaderData()
    const [cartProducts, setCartProducts] = useState(loadedCartProducts)
    console.log(loadedCartProducts);
    return (
        <div>
            <h1>My cart Page</h1>
            {
                cartProducts.map(cartProduct => <SingleCartProduct key={cartProduct._id} cartProduct={cartProduct} cartProducts={cartProducts} setCartProducts={setCartProducts}></SingleCartProduct>)
            }
        </div>
    );
};

export default MyCart;