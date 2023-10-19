import { useLoaderData } from "react-router-dom";
import SingleBrand from "../../components/SingleBrand/SingleBrand";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <div className="flex flex-col items-center gap-4">
            <h1>This is Home </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                brands.map(brand => <SingleBrand key={brand._id} brand={brand}></SingleBrand>)
            }
            </div>
        </div>
    );
};

export default Home;