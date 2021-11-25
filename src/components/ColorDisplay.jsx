export default function ColorDisplay({ product_colors }) {
  return (
    <div>
      {product_colors.map((color, index) => (
        <div
          key={index}
          className="h-5 w-5 rounded-full inline-block mr-2"
          style={{ backgroundColor: `${color.hex_value}` }}
        ></div>
      ))}
    </div>
  );
}
