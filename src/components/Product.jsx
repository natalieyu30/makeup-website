import { Link } from "react-router-dom";
import ColorDisplay from "./ColorDisplay";

export default function Product({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="w-60 p-5 bg-white rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition delay-50"
    >
      <img
        src={`https:${product.api_featured_image}`}
        alt={product.name}
        className="h-32 w-32 mx-auto object-cover"
      />
      <p className="text-sm mt-4">ID: {product.id}</p>
      <p className="font-krona text-yellow text-md lowercase">{product.name}</p>
      <p className="text-xs">{product.brand}</p>
      <div className="py-3 relative">
        <p className="font-krona z-10 relative">
          {product.price_sign} {product.price}
        </p>
        <div className="h-10 w-10 rounded-full bg-gray-300 absolute top-0 -left-1 z-0 opacity-30"></div>
      </div>
      <div className="hidden md:block">
        <ColorDisplay product_colors={product.product_colors} />
      </div>
    </Link>
  );
}
