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
    fetch("https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/brand") // Replace with the actual API endpoint URL
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productImageUrl = form.productImageUrl.value;
    const productCategory = form.productCategory.value;
    const productBrand = form.productBrand.value;
    const productPrice = form.productPrice.value;
    const productRating = form.productRating.value;
    const productStatus = form.productStatus.value;
    const productDescription = form.productDescription.value;

    const updatedProduct = {
      productName,
      productImageUrl,
      productCategory,
      productBrand,
      productPrice,
      productRating,
      productStatus,
      productDescription,
    };

    console.log(updatedProduct);

    fetch(`https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product has been updated Successfully!");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };
  return (
    <div>
      <div className="relative ">
        <div className="bg-gray-600">
          <img
            className="h-[150vh] object-cover w-full mix-blend-overlay inset-0 "
            src="/brandpageimage.jpg"
            alt=""
          />
        </div>

        <div className=" rounded-lg absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  p-4 mt-8 backdrop-blur-lg border-2 border-white dark:border-red-600 w-[80%] md:w-auto">
          <div className="px-1 md:px-10 py-8">
            <h2 className=" text-white text-center text-xl my-4">
              Update Product Info.
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

              <select
                name="productBrand"
                value={productBrand}
                className="py-2 px-4 w-full rounded-md mb-4"
              >
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
              <select
                name="productStatus"
                defaultValue={productStatus}
                className="py-2 px-4 w-full rounded-md mb-4"
              >
                <option disabled selected>
                  Select Status
                </option>
                <option value="Published">Published</option>
                <option value="Upcoming">Upcoming</option>
              </select>

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
