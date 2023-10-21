
const AddBrand = () => {

    const handleAddBrand = (e) => {
        e.preventDefault()
        const form = e.target
        const brandName = form.brandName.value 
        const brandLogoUrl = form.brandLogoUrl.value
        const brandAd1 = form.brandAd1.value 
        const brandAd2 = form.brandAd2.value
        const brandAd3 = form.brandAd3.value 

        const newBrand = {brandName, brandLogoUrl, brandAd1, brandAd2, brandAd3}
        console.log(newBrand);
        fetch('https://popcorn-plays-server-881lrltng-tuhin-hossains-projects.vercel.app/brand',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(newBrand)
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data);
          e.target.reset();
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

      <div className=" rounded-lg absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  p-4 mt-8 backdrop-blur-lg border-2 border-white dark:border-red-600 w-[80%] md:w-auto">
        <div className="px-1 md:px-10 py-4">
          <h2 className=" text-white text-center text-xl my-4">
            New Streaming Company
          </h2>
          <form onSubmit={handleAddBrand}>
            <input
              type="text"
              placeholder="Brand name"
              name="brandName"
              className="py-2 px-4 w-full rounded-md "
              required
            />
            <br />
            <input
              type="text"
              placeholder="brand logo Url..."
              name="brandLogoUrl"
              className="py-2 px-4 w-full rounded-md my-4"
              required
            />
            <br />

            {/* advertisement Image */}
            <input
              type="text"
              placeholder="brand ad 1 img Url..."
              name="brandAd1"
              className="py-2 px-4 w-full rounded-md mb-4"
              required
            />
            <br />
            <input
              type="text"
              placeholder="brand ad 2 img Url..."
              name="brandAd2"
              className="py-2 px-4 w-full rounded-md mb-4"
              required
            />
            <br />
            <input
              type="text"
              placeholder="brand ad 3 img Url..."
              name="brandAd3"
              className="py-2 px-4 w-full rounded-md mb-6"
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
    );
};

export default AddBrand;