import { Link } from "react-router-dom";

const SingleProductCard = ({ product }) => {
  //total 9 properties of a product with Database ID
  const {
    _id,
    productStatus,
    productRating,
    productPrice,
    productName,
    productImageUrl,
    productDescription,
    productCategory,
    productBrand,
  } = product;
  const upperCaseProductName = productName.toUpperCase();
  return (
    <div className="relative max-w-sm max-h-min border-black border-2 rounded drop-shadow-lg ">
      {/* Movie Image Container */}
      <div>
        <img src={productImageUrl} alt="" className="" />
      </div>

      <div className="rounded-sm absolute bottom-0  p-1 backdrop-blur-md border w-full">
        <div className="p-1 text-white text-center">
          <h2 className=" text-white text-lg font-semibold my-2">
            {upperCaseProductName}
          </h2>
          <div className="flex justify-center gap-8 text-sm">
            <p>Rating: {productRating}</p>
            <p>Brand: {productBrand}</p>
          </div>
          <div className="my-2">
            <Link to={`/productDetails/${_id}`} className="btn-sm bg-[#E50914] p-1 rounded">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
