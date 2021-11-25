import ColorDisplay from "./ColorDisplay";
import ButtonLink from "./ButtonLink";
import DOMPurify from "dompurify";

function ProductPreview({ singleProduct }) {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(singleProduct?.description),
  });

  const formatProductType = singleProduct.product_type.replace(/_/g, " ");

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-20">
      <div className="flex-1">
        <img
          className="object-cover mx-auto max-w-xs md:max-w-sm"
          src={`https:${singleProduct.api_featured_image}`}
          alt={singleProduct.name}
        />
      </div>

      <div className="flex-1 px-6">
        <p className="text-yellow text-sm text-krona">{formatProductType}</p>
        <h1 className="font-krona text-lg mb-2">{singleProduct.name}</h1>
        <ColorDisplay product_colors={singleProduct.product_colors} />

        <div className="flex items-center justify-between py-6">
          <div className="py-3 relative">
            <p className="font-krona text-lg z-10 relative">
              {singleProduct.price_sign} {singleProduct.price}
            </p>
            <div className="h-10 w-10 rounded-full bg-gray-300 absolute top-1 -left-3 z-0 opacity-30"></div>
          </div>
          {/* <div>counter</div> */}
          <ButtonLink path="/" text="add to basket" />
        </div>
        <div
          className="text-sm text-gray-600 leading-loose mb-20"
          dangerouslySetInnerHTML={sanitizedData()}
        />
      </div>
    </div>
  );
}

export default ProductPreview;
