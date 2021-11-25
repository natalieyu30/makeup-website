import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import Benefits from "../components/Benefits";
import RecommendedProduct from "../components/RecommendedProduct";
import SectionTitle from "../components/SectionTitle";
import ProductPreview from "../components/ProductPreview";
import useGetProducts from "../hooks/useGetProduct";

export default function ProductPage() {
  const { pathname } = useLocation();
  const { singleProduct } = useGetProducts();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!singleProduct) return <p className="h-80">Loading...</p>;

  return (
    <div className="container mx-auto mt-20">
      <div>
        <h5 className="font-krona text-sm mb-10">{singleProduct.name}</h5>
      </div>

      <ProductPreview singleProduct={singleProduct} />
      <Benefits />
      <SectionTitle text="For you" />
      <RecommendedProduct product={singleProduct} />
    </div>
  );
}
