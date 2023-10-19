import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";


const BrandProducts = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <h1>All Products here of this Brand</h1>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
           {
                products.map(product => <SingleProductCard key={product._id} product={product}></SingleProductCard>)
            }
           </div>
        </div>
    );
};

export default BrandProducts;