import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const [brands, setBrands] = useState([]);
    const product = useLoaderData();
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

      useEffect(() => {
        fetch('http://localhost:4444/brand') // Replace with the actual API endpoint URL
          .then((res) => res.json())
          .then((data) => setBrands(data))
          .catch((error) => console.error('Error fetching brands:', error));
      }, []);

      const handleUpdateProduct = (e) => {
        e.preventDefault()
        const form = e.target
        const productName = form.productName.value;
        const productImageUrl = form.productImageUrl.value;
        const productCategory = form.productCategory.value;
        const productBrand = form.productBrand.value;
        const productPrice = form.productPrice.value;
        const productRating = form.productRating.value;
        const productStatus = form.productStatus.value;
        const productDescription = form.productDescription.value;
    
        const newProduct = {productName, productImageUrl,productCategory,productBrand,productPrice,productRating,productStatus,productDescription}
    
        console.log(newProduct);
    
        fetch('http://localhost:4444/product',{
              method:'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(newProduct)
            })
            .then(res=> res.json())
            .then(data => {
              console.log(data);
              if(data.insertedId){
                toast.success("Product has been added.")
              }
              else{
                toast.error("Something went wrong.")
              }
            })
    
      }
    return (
        <div>
      {/* <div>
        <label>
          {" "}
          Select Brand
          <select name="productBrand">
            {brands.map((brand) => (
              <option key={brand._id} value={brand.brandName}>
                {brand.brandName}
              </option>
            ))}
          </select>
        </label>
      </div> */}
      <div className="relative ">
        <div className="bg-gray-600">
          <img
            className="h-[150vh] object-cover w-full mix-blend-overlay inset-0 "
            src="/brandpageimage.jpg"
            alt=""
          />
        </div>

        <div className=" rounded-lg absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  p-4 mt-8 backdrop-blur-lg border-2 border-white dark:border-red-600 w-[80%] md:w-auto">
          <div className="px-1 md:px-10 py-8">
            <h2 className=" text-white text-center text-xl my-4">
              Update product.
            </h2>
            <form onSubmit={handleUpdateProduct}>
              <input
                type="text"
                placeholder="Product Name"
                name="productName"
                defaultValue={productName}
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <input
                type="text"
                placeholder="Image Url..."
                name="productImageUrl"
                defaultValue={productImageUrl}
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <input
                type="text"
                placeholder="Product Category"
                name="productCategory"
                defaultValue={productCategory}
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <div className="mb-4">
                <label className="">
                  {" "}
                  Select Brand
                  <select name="productBrand" defaultValue={productBrand}>
                    {brands.map((brand) => (
                      <option
                        className="w-full"
                        key={brand._id}
                        value={brand.brandName}
                      >
                        {brand.brandName}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <input
                type="text"
                placeholder="Price"
                name="productPrice"
                defaultValue={productPrice}
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <br />
              <input
                type="number"
                placeholder="Rating"
                name="productRating"
                defaultValue={productRating}
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <br />

              <p>Please select product status:</p>
                <input type="radio"  name="productStatus" value="Published" defaultChecked/>
                <label >Published</label><br/>
                <input type="radio"  name="productStatus" value="Upcoming"/>
                <label >Upcoming</label>

              <textarea
                type="text"
                placeholder="Short Description.."
                name="productDescription"
                defaultValue={productDescription}
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <br />

              <input
                type="submit"
                value="UPDATE"
                className="text-white font-semibold py-2 px-4 w-full rounded-md bg-[#E50914] mb-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default UpdateProduct;