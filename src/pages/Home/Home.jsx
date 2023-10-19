import { useLoaderData } from "react-router-dom";
import SingleBrand from "../../components/SingleBrand/SingleBrand";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <div>
            <h1>This is Home </h1>
            {
                brands.map(brand => <SingleBrand key={brand._id} brand={brand}></SingleBrand>)
            }
        </div>
    );
};

export default Home;