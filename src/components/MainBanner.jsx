import ButtonLink from "./ButtonLink";
import bannerImg from "../img/leaf2.jpeg";

export default function MainBanner() {
  return (
    <div className="flex flex-col sm:flex-row container items-center gap-10 mt-10 mb-32 mx-auto">
      <div className="flex-1 mx-10 order-2 sm:order-1">
        <h2 className="font-krona text-3xl mb-2">
          The Makeup e-commerce project
        </h2>
        <p className="font-krona text-lg text-gray-500 mb-6">
          Using axios to fetch API and tailwaind.css{" "}
        </p>
        <p className="mb-4">
          This project is built with data from a MakeUp API using Axios,
          Tailwind CSS, ReactJS, React Context API and React Router.
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          obcaecati dicta dolor nam eligendi optio commodi laudantium dolorum,
          perferendis voluptate. Fugiat sit ea atque, recusandae officiis maxime
          a corporis dignissimos.
        </p>
        <ButtonLink path="/about" text="see more" />
      </div>

      <div className="flex-1 p-8 max-h-96 max-w-screen-sm overflow-hidden flex items-center order-1 sm:order-2">
        <img
          src={bannerImg}
          alt="green leaf and lightblue plates"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
}
