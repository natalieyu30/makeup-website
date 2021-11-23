import Benefits from "../components/Benefits";
import RecommendedProduct from "../components/RecommendedProduct";

import useGetProducts from "../hooks/useGetProduct";
import DOMPurify from "dompurify";

export default function ProductPage() {
  // const { id } = useParams();
  const { singleProduct } = useGetProducts();
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(singleProduct?.description),
  });

  if (!singleProduct) return <p className="h-80">Loading...</p>;

  return (
    <div className="container mx-auto mt-20">
      <div>
        <h5 className="font-krona text-sm mb-10">{singleProduct.name}</h5>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-20">
        <div className="flex-1">
          <img
            className="object-cover mx-auto max-w-md"
            src={`https:${singleProduct.api_featured_image}`}
            alt={singleProduct.name}
          />
        </div>

        <div className="flex-1 px-6">
          <p className="text-yellow text-sm text-krona">
            {singleProduct.product_type}
          </p>
          <h1 className="font-krona text-lg mb-2">{singleProduct.name}</h1>
          {singleProduct.product_colors.map((color, index) => (
            <div
              key={index}
              className="h-5 w-5 rounded-full inline-block mr-2"
              style={{ backgroundColor: `${color.hex_value}` }}
            ></div>
          ))}

          <div className="flex items-center justify-between py-6">
            <div className="py-3 relative">
              <p className="font-krona text-lg z-10">
                {singleProduct.price_sign} {singleProduct.price}
              </p>
              <div className="h-10 w-10 rounded-full bg-gray-300 absolute top-1 -left-3 z-0 opacity-30"></div>
            </div>
            {/* <div>counter</div> */}
            <button className="inline-block px-6 py-3 rounded-full text-sm font-krona  bg-yellow">
              add to basket
            </button>
          </div>
          <div
            className="text-sm text-gray-600 leading-loose"
            dangerouslySetInnerHTML={sanitizedData()}
          />
        </div>
      </div>

      {/* banner */}
      <Benefits />
      {/* Recommended Products*/}
      <RecommendedProduct product={singleProduct} />
    </div>
  );
}
