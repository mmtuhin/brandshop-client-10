import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";


const MyCart = () => {
    const cartProducts = useLoaderData()
    console.log(cartProducts);
    return (
        <div>
            <h1>My cart Page</h1>
            {
                cartProducts.map(cartProduct => <SingleProductCard product={cartProduct}></SingleProductCard>)
            }
        </div>
    );
};

export default MyCart;