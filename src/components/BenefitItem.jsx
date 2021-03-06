export default function BenefitItem({ item }) {
  return (
    <div className="flex items-center gap-5 mb-2 md:mb-24">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 z-50 relative"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={item.icon}
          />
        </svg>
        <div className="absolute h-8 w-8 -top-0 -left-3 rounded-full bg-yellow z-10"></div>
      </div>

      <div>
        <h5 className="font-krona text-gray-600">{item.title}</h5>
        <p className="text-sm text-gray-500">{item.text}</p>
      </div>
    </div>
  );
}
