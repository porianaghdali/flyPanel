import RangeSlider from "./range";

export default function Filter() {
  const list = [
    {
      title: "تکسیم",
      id: "تکسیم",
    },
    {
      title: "بشیکتاش",
      id: "بشیکتاش",
    },
    {
      title: "شیشلی",
      id: "شیشلی",
    },
    {
      title: "سلطان احمد",
      id: "سلطان احمد",
    },
    {
      title: " فاتیح",
      id: " فاتیح",
    },
    {
      title: " بی اوغلو",
      id: " بی اوغلو",
    },
  ];
  return (
    <div className="shadow-[0px_4px_12px_3px_#0000000D] h-fit p-6 rounded-3xl bg-white flex flex-col gap-8">
      <select name="" id="">
        <option value="1">1</option>
      </select>
      <hr className="h-[1px] text-[#E6E6E6]" />
      <input type="text" placeholder="جستجوی نام هتل" />
      <hr className="h-[1px] text-[#E6E6E6]" />
      <div className="flex flex-col gap-6 ">
        <p className="font-semibold  text-[#555555] text-base">موقعیت مکانی</p>
        <div className="flex flex-col gap-4 max-h-[280px] overflow-y-scroll">
          {list.map((item) => {
            return (
              <div
                key={item.id}
                className="p-2 text-[#1C1C1F] font-normal text-base flex items-center gap-2 "
              >
                <input type="checkbox" />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="h-[1px] text-[#E6E6E6]" />
      <div>
        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold text-[#555555] text-base">بازه قیمتی</p>
          <p className="text-[#B1B3C8] text-sm font-normal">به تومان</p>
        </div>
        <div>
          <div className="flex justify-between text-[#555555] font-semibold text-sm">
            <p>گران ترین</p>
            <p>ارزان ترین</p>
          </div>
          <RangeSlider />
        </div>
      </div>
    </div>
  );
}
