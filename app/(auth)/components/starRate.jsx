const Star = ({ filled, half }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-[#D3AE60]"
  >
    {half && (
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="#511424" />
        </linearGradient>
      </defs>
    )}
    <path
      fill={half ? "url(#half)" : filled ? "currentColor" : "#e5e7eb"}
      d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

export default function StarRating({ value = 0, maxStars = 5 }) {
  return (
    <div dir="ltr" className="flex gap-1 w-fit">
      {Array.from({ length: maxStars }).map((_, index) => {
        const filled = value >= index + 1;
        const half = value > index && value < index + 1;
        return <Star key={index} filled={filled} half={half} />;
      })}
    </div>
  );
}
