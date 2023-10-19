import { Link } from "react-router-dom";


const SingleBrand = ({brand}) => {
    const {_id, brandLogoUrl, brandName} = brand
    return (
        <div>
            <h1>{brandName}</h1>
            <Link className="btn btn-sm" to={`/brandProducts/${brandName}`}>Show All</Link>
        </div>
    );
};

export default SingleBrand;