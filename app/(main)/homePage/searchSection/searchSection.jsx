"use client";

import { Calendar, MapPinIcon, Search, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SearchSection() {  const pathname = usePathname();

  const list = [
    {
      title: "تورهای داخلی",
      id: "tour",
    },
    {
      title: "تورهای خارجی",
      id: "external",
    },
    {
      title: "پرواز",
      id: "flight",
    },
    {
      title: "قطار",
      id: "train",
    },
    {
      title: "اتوبوس",
      id: "bus",
    },
    {
      title: "هتل",
      id: "hotel",
    },
  ];
  const details = [
    {
      title: "مبدا",
      id: "start",
      selected: "تهران",
      icon: <MapPinIcon size={24} />,
    },
    {
      title: "مقصد",
      id: "end",
      selected: "استانبول",
      icon: <MapPinIcon size={24} />,
    },
    {
      title: "تاریخ رفت",
      id: "goneDate",
      selected: "۱۴۰۴/۰۲/۱۱",
      icon: <Calendar size={24} />,
    },
    {
      title: "تاریخ برگشت",
      id: "returnDate",
      selected: "۱۴۰۴/۰۲/۱۷",
      icon: <Calendar size={24} />,
    },
    {
      title: "تعداد مسافر",
      id: "numberOfPassengers",
      selected: "۳",
      icon: <UserRound />,
    },
  ];
  const [selected, setSelected] = useState("internal");
  return (
    <div className="mx-auto w-full">
      <div
        className="bg-white  rounded-3xl "
        style={{ boxShadow: "0px 4px 9px 3px #0000001C" }}
      >
        <ul className="flex">
          {list.map((item) => (
            <li
              className={`${
                selected === item.id
                  ? "bg-[#FDFBF7] border-0 rounded-t-3xl text-[#511424]"
                  : "border-b border-[#E6E6E6] text-[#939393]"
              } py-4 px-6 `}
              key={item.id}
            >
              <Link href={`/${item.id}`}
                role="tab"
                aria-selected={selected === item.id}
                className="  font-extrabold text-sm whitespace-nowrap"
                onClick={() => {
                  setSelected(item.id);
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="w-full border-b border-[#E6E6E6]"></li>
        </ul>
        <div className="w-full flex justify-between p-6 items-center bg-[#FDFBF7] shadow-[ 0px 4px 9px 3px rgba(0, 0, 0, 0.11)] rounded-b-3xl">
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-1 text-[#525252]">
              <MapPinIcon size={24} />{" "}
              <p className="text-base font-semibold items-center">مبدا</p>
            </div>
            <div className="text-xl font-semibold text-[#1C1C1F]">تهران</div>
          </div>{" "}
          <hr className="w-[1px] h-12 bg-[#E6E6E6]" />
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-1 text-[#525252]">
              <MapPinIcon size={24} />{" "}
              <p className="text-base font-semibold items-center">مقصد</p>
            </div>
            <div className="text-xl font-semibold text-[#1C1C1F]">استانبول</div>
          </div>{" "}
          <hr className="w-[1px] h-12 bg-[#E6E6E6]" />
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-1 text-[#525252]">
              <Calendar size={24} />{" "}
              <p className="text-base font-semibold items-center">تاریخ رفت</p>
            </div>{" "}
            <div className="text-xl font-semibold text-[#1C1C1F]">
              ۱۴۰۴/۰۲/۱۱
            </div>
          </div>
          <hr className="w-[1px] h-12 bg-[#E6E6E6]" />
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-1 text-[#525252]">
              <Calendar size={24} />{" "}
              <p className="text-base font-semibold items-center">
                تاریخ برگشت
              </p>
            </div>
            <div className="text-xl font-semibold text-[#1C1C1F]">
              ۱۴۰۴/۰۲/۱۷{" "}
            </div>
          </div>
          <hr className="w-[1px] h-12 bg-[#E6E6E6]" />
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-1 text-[#525252]">
              <UserRound />{" "}
              <p className="text-base font-semibold items-center">
                {" "}
                تعداد مسافر
              </p>
            </div>
            <div className="text-xl font-semibold text-[#1C1C1F]">۳ نفر </div>
          </div>
          <hr className="w-[1px] h-12 bg-[#E6E6E6]" />
          <div>
            <button className="text-white bg-[#511424] flex items-center gap-2 py-2.5 px-6 rounded-3xl">
              جستجو
              <Search size={18} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
