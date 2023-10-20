import { Link } from "react-router-dom";

const SingleBrand = ({ brand }) => {
  const { _id, brandLogoUrl, brandName } = brand;
  return (
    <div className="card h-auto max-w-xs bg-gradient-to-t from-blue-800 to-blue-400 shadow-xl">
        <figure className="px-10 pt-10 flex-grow">
          <img
            src={brandLogoUrl}
            alt={brandName}
            className="rounded-xl p-4"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brandName}</h2>
          <div className="card-actions">
            <button className="btn btn-primary btn-sm bg-[#E50914]"><Link to={`/brandProducts/${brandName}`}>Show All</Link></button>
          </div>
        </div>
      </div>
  );
};

export default SingleBrand;
