import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const ProductDetails = () => {
  const {user} = useContext(AuthContext)
  const email = user.email
  console.log(email);
    const productDetails = useLoaderData()
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

      const cartItem = {_id,
        productStatus,
        productRating,
        productPrice,
        productName,
        productImageUrl,
        productDescription,
        productCategory,
        productBrand,
        email
      }

      const handleAddToCart = () => {

        console.log("Adding to cart");

        fetch('http://localhost:4444/cart',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            toast.success("Product Added to cart")
          }
          else if(data.message){
            toast.error(data.message)
          }
        })

      }

    return (
        <div>
            <h1>{productName}</h1>
            <img src={productImageUrl} alt="" />
            <p>{productCategory}</p>
            <p>{productBrand}</p>
            <p>{productPrice}</p>
            <p>{productRating}</p>
            <p>{productStatus}</p>
            <p>{productDescription}</p>
            <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
    );
};

export default ProductDetails;