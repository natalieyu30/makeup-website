import BenefitItem from "./BenefitItem";

const benefits = [
  {
    id: "1",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Delivery",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi architecto a hic.",
  },
  {
    id: "2",
    icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
    title: "Products",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi architecto a hic.",
  },
  {
    id: "3",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    title: "Payments",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi architecto a hic.",
  },
];

export default function Benefits() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-10 my-20 px-6">
      {benefits.map((item) => (
        <BenefitItem key={item.id} item={item} />
      ))}
    </div>
  );
}
