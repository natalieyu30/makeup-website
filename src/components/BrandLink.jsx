import { Link } from "react-router-dom";

const BrandLink = ({ classes }) => (
  <Link to="/" className={`text-2xl font-krona ${classes}`}>
    Natdev
  </Link>
);

export default BrandLink;
