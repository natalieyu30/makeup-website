import BrandLink from "./BrandLink";

import { Link } from "react-router-dom";
import links from "../data/footerLinks.json";

export default function Footer() {
  // const links = ["about", "skincare", "makeup", "supplements", "contact"];

  return (
    <footer className="bg-dark text-light  p-4 pt-12">
      <div className="flex flex-col md:flex-row flex-wrap justify-between">
        <BrandLink classes="text-yellow mr-20 mb-8" />

        <div className="flex flex-col md:flex-row my-5 md:my-0">
          {links.map((item, index) => (
            <div className="flex flex-col mb-6 md:mr-20" key={index}>
              <h6 className="font-krona text-sm uppercase">{item.title}</h6>
              <div>
                {item.links.map((link) => (
                  <Link
                    to={link.path}
                    key={link.name}
                    className="lowercase text-sm block hover:text-yellow"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-yellow space-x-4 md:space-x-0 order-2 md:order-3 flex md:block mb-6 md:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-light-grey block mb-4"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-light-grey block mb-4"
          >
            TwitterIcon
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-light-grey block mb-4"
          >
            InstagramIcon
          </a>
        </div>
      </div>

      <p className="text-dark-grey text-xs text-center my-6">
        React JS Project of Natdev
      </p>
    </footer>
  );
}
