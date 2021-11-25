import ButtonLink from "./ButtonLink";
import bannerImg from "../img/bannerImg.jpeg";

export default function SecondBanner() {
  return (
    <div className="flex flex-col sm:flex-row container mx-auto bg-green text-white items-center justify-between gap-0 sm:gap-10 my-10 relative -bottom-40">
      <div className="p-8">
        <h3 className="font-krona m-4">
          Be natural,
          <br /> Be smart, <br /> Be you
        </h3>
        <ButtonLink path="/about" text="see more" color />
      </div>

      <div className="p-6 sm:pr-12 hidden sm:block">
        <img
          src={bannerImg}
          alt="candle and face massage product"
          width="300"
        />
      </div>
    </div>
  );
}
