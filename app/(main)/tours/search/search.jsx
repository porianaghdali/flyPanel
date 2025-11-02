"use client";
import {
  ArrowLeftRight,
  Bed,
  Contact,
  CreditCard,
  Plane,
  Search,
} from "lucide-react";
import Select from "./select";
import { useState } from "react";

export default function SearchTisket() {
  const progress = [
    { title: "انتخاب هتل", icon: <Bed />, id: 1 },
    { title: "انتخاب پرواز", icon: <Plane />, id: 2 },
    { title: "مشخصات مسافران", icon: <Contact />, id: 3 },
    { title: "پرداخت و تهیه بلیت", icon: <CreditCard />, id: 4 },
  ];
  const [active, setActive] = useState(4);
  return (
    <div className=" px-[5%] pb-6 grid gap-6 bg-white  shadow-[0px_4px_12px_3px_#0000000D]">
      <div className="flex mx-auto py-6 gap-6">
        <div className="flex gap-6 relative">
          <Select />
          <button className="   absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-[#E6E8E7]">
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
          {progress.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-center w-full"
              >
                <div
                  className={
                    active >= item.id
                      ? `flex w-full text-[#D3AE60] max-w-[152px] flex-col items-center justify-center gap-1 `
                      : `flex w-full text-[#B1B3C8] max-w-[152px] flex-col items-center justify-center gap-1 `
                  }
                >
                  {item.icon}
                  <p className=" font-semibold text-base"> {item.title}</p>
                </div>
                {item.id !== 4 && (
                  <hr
                    className={
                      active >= item.id + 1
                        ? "h-[2px] text-[#D3AE60]  bg-[#D3AE60] w-full max-w-[173px]"
                        : "h-[2px] text-[#B1B3C8]  bg-[#B1B3C8] w-full max-w-[173px]"
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
