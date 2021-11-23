import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/search", name: "Search" },
    { path: "/about", name: "About" },
  ];
  return (
    <div>
      {links.map((link, index) => (
        <NavLink className="text-sm mr-8" key={index} to={`${link.path}`}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
