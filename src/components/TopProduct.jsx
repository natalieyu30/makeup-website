import SecondBanner from "./SecondBanner";
import ButtonLink from "./ButtonLink";
import SectionTitle from "./SectionTitle";
import Product from "./Product";

import useGetTopProducts from "../hooks/useGetTopProducts";

export default function TopProduct() {
  const { products } = useGetTopProducts();
  // console.log(products);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6 mx-16">
          <SectionTitle text="Top Product" />
          <ButtonLink
            path="/about"
            text="see more"
            className="hidden md:block"
            color=""
          />
        </div>

        {/* Product */}
        <div className="flex flex-wrap justify-center gap-6">
          {products?.map((p) => (
            <Product key={p.id} product={p} />
          ))}
        </div>
      </div>
      <SecondBanner />
    </>
  );
}
