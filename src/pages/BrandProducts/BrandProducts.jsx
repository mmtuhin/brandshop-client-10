import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";

const BrandProducts = () => {
  const combinedData = useLoaderData();
  const { brandInfo, brandProducts } = combinedData;

  console.log(brandInfo[0]);
  const { brandAd1, brandAd2, brandAd3 } = brandInfo[0];
  //const brandAdImages = brandInfo[0]
  //console.log(brandProducts);
  //const products = combinedData[1]
  console.log(brandAd1);

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={brandAd1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={brandAd2}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={brandAd3}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {brandProducts.length ? (
        <div className="flex flex-col md:mx-8 md:grid md:grid-cols-2 lg:flex lg:flex-row gap-4 py-8 justify-center items-center mx-auto text-center">
          {brandProducts.map((product) => (
            <SingleProductCard
              key={product._id}
              product={product}
            ></SingleProductCard>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-center items-center h-[50vh] text-2xl font-semibold">OPPS! No product available.</h1>
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
