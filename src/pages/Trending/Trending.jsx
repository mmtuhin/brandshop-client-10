import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";


const Trending = () => {
    const trendings = useLoaderData();
    return (
        <div>
            <h1>Trending Movies</h1>
            <div>
                {
                    trendings.map(product => <SingleProductCard key={product._id} product={product}></SingleProductCard>)
                }
            </div>
        </div>
    );
};

export default Trending;