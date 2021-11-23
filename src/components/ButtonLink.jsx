import { Link } from "react-router-dom";
export default function ButtonLink({ path, text, color }) {
  return (
    <Link
      to={path}
      className={`inline-block px-6 py-3 rounded-full text-sm font-krona ${
        color ? "bg-dark text-white" : "bg-yellow"
      }`}
    >
      {text}
    </Link>
  );
}
