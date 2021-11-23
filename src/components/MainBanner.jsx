import ButtonLink from "./ButtonLink";
import bannerImg from "../img/leaf2.jpeg";

export default function MainBanner() {
  return (
    <div className="flex flex-col sm:flex-row container items-center gap-10 my-10 mx-auto">
      <div className="flex-1 mx-10">
        <h2 className="font-krona text-2xl mb-4">
          The React project with API using Axios, Tailwind CSS and React Router
        </h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          obcaecati dicta dolor nam eligendi optio commodi laudantium dolorum,
          perferendis voluptate. Fugiat sit ea atque, recusandae officiis maxime
          a corporis dignissimos.
        </p>
        <ButtonLink path="/about" text="see more" />
      </div>

      <div className="flex-1 p-8 max-h-96 max-w-screen-sm overflow-hidden flex items-center">
        <img
          src={bannerImg}
          alt="green leaf and lightblue plates"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
}
