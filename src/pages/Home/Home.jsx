import { useLoaderData } from "react-router-dom";
import SingleBrand from "../../components/SingleBrand/SingleBrand";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold text-xl">{brands.length} Streaming Media Available</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {
                brands.map(brand => <SingleBrand key={brand._id} brand={brand}></SingleBrand>)
            }
            </div>
        </div>
    );
};

export default Home;