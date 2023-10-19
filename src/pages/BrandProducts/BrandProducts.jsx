import { useLoaderData } from "react-router-dom";


const BrandProducts = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <h1>All Products here of this Brand</h1>
        </div>
    );
};

export default BrandProducts;