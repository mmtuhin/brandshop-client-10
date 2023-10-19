import { Link } from "react-router-dom";


const AddBrand = () => {

    const handleAddBrand = (e) => {
        e.preventDefault()
        const form = e.target
        const brandName = form.brandName.value 
        const brandLogoUrl = form.brandLogoUrl.value

        const newBrand = {brandName, brandLogoUrl}
        console.log(newBrand);
        fetch('http://localhost:4444/brand',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(newBrand)
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data);
        })
    }

    return (
        <div className="relative ">
      <div className="bg-gray-600">
        <img
          className="h-[90vh] object-cover w-full mix-blend-overlay inset-0 "
          src="/brandpageimage.jpg"
          alt=""
        />
      </div>

      <div className=" rounded-lg absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  p-4 mt-8 backdrop-blur-lg border-2 border-white dark:border-red-600 w-[80%] md:w-auto">
        <div className="px-1 md:px-10 py-8">
          <h2 className=" text-white text-center text-xl my-4">
            New Streaming Company
          </h2>
          <form onSubmit={handleAddBrand}>
            <input
              type="text"
              placeholder="Brand name"
              name="brandName"
              className="py-2 px-4 w-full rounded-md "
            />
            <br />
            <input
              type="text"
              placeholder="brand logo Url..."
              name="brandLogoUrl"
              className="py-2 px-4 w-full rounded-md my-6"
            />
            <br />
            <input
              type="submit"
              value="ADD"
              className="text-white font-semibold py-2 px-4 w-full rounded-md bg-[#E50914] mb-4"
            />
          </form>
          <a className="text-left text-sm text-white">
            New here?{" "}
            <Link to="/registration">
              <span className="font-semibold text-blue-300">Add</span>
            </Link>
          </a>
        </div>
      </div>
    </div>
    );
};

export default AddBrand;