import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const SingleCartProduct = ({cartProduct, cartProducts, setCartProducts}) => {
  

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
      } = cartProduct;
      const upperCaseProductName = productName.toUpperCase();

      const handleDeleteCartItem = (_id) => {
                console.log(_id);
                fetch(`https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                      toast.success("Product removed from cart.")
                      const remaining = cartProducts.filter(product => product._id !==_id)
                      setCartProducts(remaining);
                      
                    }
                    else{
                      toast.error("Something Went Wrong")
                    }
                })
      }

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
            <div className="my-2 flex gap-4 justify-center">
              <Link to={`/productDetails/${_id}`} className="btn-sm bg-[#E50914] p-1 rounded">
                Show Details
              </Link>
              <button onClick={() => handleDeleteCartItem(_id)} className="btn-sm bg-[#E50914] p-1 rounded">
                Remove from cart.
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleCartProduct;