import {
  ArrowLeftRight,
  Bed,
  Contact,
  CreditCard,
  Plane,
  Search,
} from "lucide-react";
import Select from "./select";

export default function SearchTisket() {
  const progress = [
    { title: "انتخاب هتل", icon: <Bed />, id: "Hotel selection" },
    { title: "انتخاب پرواز", icon: <Plane />, id: "Flight selection" },
    { title: "مشخصات مسافران", icon: <Contact />, id: "Profile of passengers" },
    { title: "پرداخت و تهیه بلیت", icon: <CreditCard />, id: "Payment" },
  ];
  return (
    <div
      className=" px-[5%] pb-6 grid gap-6 bg-white  shadow-[0px_4px_12px_3px_#0000000D]
"
    >
      <div className="flex mx-auto py-6 gap-6">
        <div className="flex gap-6 relative">
          <Select />
          <button className="  cursor-pointer absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-[#E6E8E7]">
            <ArrowLeftRight color="#555555" />
          </button>
          <Select />
        </div>
        <Select />
        <Select />
        <Select />
        <button className="px-5 py-2.5 bg-[#511424] rounded-3xl">
          <Search size={24} color="white" />
        </button>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div className="flex w-full text-[#D3AE60] max-w-[152px] flex-col items-center justify-center gap-1 ">
            <Bed />
            <p className=" font-semibold text-base">انتخاب هتل</p>
          </div>
          <hr className="h-[2px]  bg-[#B1B3C8] w-full max-w-[173px]"/>
          <div className="flex w-full text-[#B1B3C8] max-w-[152px] flex-col items-center justify-center gap-1 ">
            <Plane />
            <p className=" font-semibold text-base">انتخاب پرواز</p>
          </div>
          <hr className="h-[2px]  bg-[#B1B3C8] w-full max-w-[173px]"/>
          <div className="flex w-full text-[#B1B3C8] max-w-[152px] flex-col items-center justify-center gap-1 ">
            <Contact />
            <p className=" font-semibold text-base">مشخصات مسافران</p>
          </div>
          <hr className="h-[2px]  bg-[#B1B3C8] w-full max-w-[173px]"/>
          <div className="flex w-full text-[#B1B3C8] max-w-[152px] flex-col items-center justify-center gap-1 ">
            <CreditCard />
            <p className=" font-semibold text-base"> پرداخت و تهیه بلیت</p>
          </div>
        </div>
      </div>
    </div>
  );
}
