import { useLoaderData } from "react-router-dom";

import SingleCartProduct from "../../components/SingleCartProduct/SingleCartProduct";
import { useState } from "react";


const MyCart = () => {
    const loadedCartProducts = useLoaderData()
    const [cartProducts, setCartProducts] = useState(loadedCartProducts)
    console.log(loadedCartProducts);
    return (
        <div>
            <h1 className="text-center font-semibold text-xl">My cart products</h1>
            <div className="flex flex-col md:mx-8 md:grid md:grid-cols-2 lg:flex lg:flex-row gap-4 py-8 justify-center items-center mx-auto text-center">
                {
                cartProducts.map(cartProduct => <SingleCartProduct key={cartProduct._id} cartProduct={cartProduct} cartProducts={cartProducts} setCartProducts={setCartProducts}></SingleCartProduct>)
            }
            </div>
            
        </div>
    );
};

export default MyCart;