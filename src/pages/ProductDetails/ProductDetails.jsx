import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(email);
  const productDetails = useLoaderData();
  console.log(productDetails[0]);
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
  } = productDetails[0];

  const cartItem = {
    _id,
    productStatus,
    productRating,
    productPrice,
    productName,
    productImageUrl,
    productDescription,
    productCategory,
    productBrand,
    email,
  };

  const handleAddToCart = () => {
    console.log("Adding to cart");

    fetch("http://localhost:4444/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Added to cart");
        } else if (data.message) {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="flex gap-8 justify-center">
      <div className=" mx-8 my-8">
        <img src={productImageUrl} className=" rounded-lg" />
        {/* <div className="absolute bg-black w-96 py-6 bottom-0 bg-opacity-60 rounded-lg">
          
        </div> */}
      </div>
      <div>
        <h1 className="text-2xl font-bold  mt-12 mb-4">{productName}</h1>
        <button
            onClick={handleAddToCart}
            className="text-white bg-red-600 py-1 px-6 font-semibold rounded"
          >
            Add to cart: {productPrice} $
          </button>
        <p>Streaming Media: {productBrand}</p>
        <p>Rating: {productRating}</p>
        <p>Category: {productCategory}</p>
        <p>Status: {productStatus}</p>
        <p className="mt-4">Description: {productDescription}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
