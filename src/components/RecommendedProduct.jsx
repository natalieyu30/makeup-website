import { useEffect } from "react";
import Product from "./Product";
import useGetRecommendedProducts from "../hooks/useGetRecommendedProducts";

export default function RecommendedProduct(product) {
  const { recommendedProducts, getRecommendedProducts } =
    useGetRecommendedProducts();

  useEffect(() => {
    getRecommendedProducts(product);
  }, [product, getRecommendedProducts]);
  // console.log(recommendedProducts);

  return (
    <div className="flex flex-wrap justify-center gap-6 py-10 mb-20">
      {recommendedProducts?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
