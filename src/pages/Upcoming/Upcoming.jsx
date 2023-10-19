import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";


const Upcoming = () => {
    const upcomings = useLoaderData()
    return (
        <div>
            <h1>Upcoming Movies</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    upcomings.map((product, index) => <SingleProductCard key={index} product={product}></SingleProductCard>)
                }
            </div>
        </div>
    );
};

export default Upcoming;