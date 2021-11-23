import BrandLink from "./BrandLink";
import NavLinks from "./NavLinks";
import HeartIcon from "./icons/HeartIcon";
import CartIcon from "./icons/CartIcon";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-3 font-krona container m-auto">
      <BrandLink />

      <div className="flex">
        <NavLinks />

        <div className="flex">
          <HeartIcon />
          <CartIcon />
        </div>
      </div>
    </div>
  );
}
