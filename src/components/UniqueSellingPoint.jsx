import bannerImg from "../img/elegance.jpeg";

export default function UniqueSellingPoint() {
  return (
    <div style={{ backgroundColor: "#ECECEC" }} className="pt-32 pb-20">
      <div className="flex flex-col sm:flex-row container mx-auto  items-center gap-10 pt-20 pb-10 px-10">
        <div className="flex-1 p-8">
          <img src={bannerImg} alt="green leaf and lightblue plates" />
        </div>

        <div className="flex-1">
          <h2 className="font-krona text-2xl mb-4">
            Elegance what you deserves.
          </h2>
          <p className="mb-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            obcaecati dicta dolor nam eligendi optio commodi laudantium dolorum,
            perferendis voluptate. Fugiat sit ea atque, recusandae officiis
            maxime a corporis dignissimos.
          </p>
          <p className="mb-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            obcaecati dicta dolor nam eligendi optio commodi laudantium dolorum.
          </p>
        </div>
      </div>
    </div>
  );
}
