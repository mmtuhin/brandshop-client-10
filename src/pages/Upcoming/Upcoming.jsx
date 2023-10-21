import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";


const Upcoming = () => {
    const upcomings = useLoaderData()
    return (
        <div>
            <h1 className="text-center text-xl font-semibold">Upcoming Movies on this site.</h1>
            <div className="flex flex-col md:mx-8 md:grid md:grid-cols-2 lg:flex gap-4 py-8 lg:flex-row justify-center items-center mx-auto text-center">
                {
                    upcomings.map((product, index) => <SingleProductCard key={index} product={product}></SingleProductCard>)
                }
            </div>
        </div>
    );
};

export default Upcoming;