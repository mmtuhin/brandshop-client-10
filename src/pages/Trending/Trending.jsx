import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";


const Trending = () => {
    const trendings = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-xl font-semibold">Trending Movies</h1>
            <div className="flex flex-col md:mx-8 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap gap-4 py-8 justify-center items-center mx-auto text-center">
                {
                    trendings.map(product => <SingleProductCard key={product._id} product={product}></SingleProductCard>)
                }
            </div>
        </div>
    );
};

export default Trending;