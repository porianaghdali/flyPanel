import StarRating from "@/app/(main)/components/starRate";

export default function Rate() {
  const feature = [
    { title: "تنها مرد", id: 1, rate: "۱۵٪" },
    { title: " دوستانه", id: 2, rate: "۲۰٪" },
    { title: "تنها زن", id: 3, rate: "۵۱٪" },
    { title: " خانوادگی", id: 4, rate: "۱۴٪" },
  ];
  const rate = [
    { title: "وعده غدایی", id: 1, rate: "۳.۳" },
    { title: " رفتار پرسنل", id: 2, rate: "۳.۹" },
    { title: "دسترسی‌پذیری", id: 3, rate: "۲.۷" },
    { title: " میزان امکانات هتل", id: 4, rate: "۴.۱" },
  ];
  return (
    <div className="px-6 py-16 grid gap-12">
      <div className="flex items-center ">
        <div className="flex items-center gap-1 ml-6">
          <StarRating value={5} />{" "}
          <p className="text-[#1C1C1F] font-semibold text-3xl">5</p>
        </div>
        <p className="text-base font-semibold text-[#555555]">۱۲۲ نظر</p>
      </div>
      <div className="grid gap-2">
        <p className="text-[#1C1C1F] text-2xl font-semibold">مناسب برای</p>
        <ul className="flex justify-between w-3/5 ">
          {feature.map((item) => {
            return (
              <li
                key={item.id}
                className="text-[#1C1C1F] text-base font-semibold grid gap-2 p-3"
              >
                <p className="text-[#525252] text-base font-semibold text-center">
                  {item.title}
                </p>
                <p className="text-[#1C1C1F] text-2xl font-bold text-center">
                  {item.rate}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid gap-2">
        <p className="text-[#1C1C1F] text-2xl font-semibold">امتیاز کیفی </p>
        <ul className="flex justify-between w-3/5 ">
          {rate.map((item) => {
            return (
              <li
                key={item.id}
                className="text-[#1C1C1F] text-base font-semibold grid gap-2 p-3"
              >
                <p className="text-[#525252] text-base font-semibold text-center">
                  {item.title}
                </p>
                <div className="text-[#1C1C1F] text-2xl font-bold text-center flex gap-2 justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[#D3AE60]"
                  >
                    <path
                      fill="black"
                      d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                  <p>{item.rate}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
