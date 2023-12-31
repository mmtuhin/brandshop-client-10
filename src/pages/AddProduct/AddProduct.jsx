import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const AddProduct = () => {
  const brands = useLoaderData();
  //console.log(brands[0].brandName);

  const handleAddProduct = (e) => {
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

    const newProduct = {
      productName,
      productImageUrl,
      productCategory,
      productBrand,
      productPrice,
      productRating,
      productStatus,
      productDescription,
    };

    console.log(newProduct);

    fetch("https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          e.target.reset();
          toast.success("Product has been added.");
        } else {
          toast.error("Something went wrong.");
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
              Add product.
            </h2>
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                placeholder="Product Name"
                name="productName"
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <input
                type="text"
                placeholder="Image Url..."
                name="productImageUrl"
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <input
                type="text"
                placeholder="Product Category"
                name="productCategory"
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />

              <select
                name="productBrand"
                className="py-2 px-4 w-full rounded-md mb-4"
              >
                <option disabled selected>
                  Select Brand
                </option>
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
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <br />
              <input
                type="number"
                placeholder="Rating"
                name="productRating"
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <br />

              {/* <p>Please select product status:</p>
                <input type="radio"  name="productStatus" value="Published"/>
                <label >Published</label><br/>
                <input type="radio"  name="productStatus" value="Upcoming"/>
                <label >Upcoming</label> */}

              <select
                name="productStatus"
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
                className="py-2 px-4 w-full rounded-md mb-4"
                required
              />
              <br />

              <input
                type="submit"
                value="ADD"
                className="text-white font-semibold py-2 px-4 w-full rounded-md bg-[#E50914] mb-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
