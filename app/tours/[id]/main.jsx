"use client";
import HotelFacilities from "./sections/hotelFacilities";
import ImportantPoints from "./sections/importantPoints/importantPoints";
import Location from "./sections/location";
import Rate from "./sections/rate";

import { useState } from "react";

export default function Main() {
  const list = [
    { title: "امکانات هتل", id: 1 },
    { title: "موقعیت مکانی", id: 2 },
    { title: "نقاط مهم اطراف هتل", id: 3 },
    { title: "امتیازها و نظرات", id: 4 },
  ];

  const [selected, setSelected] = useState(1);
  return (
    <div className="flex-1   shadow-[0px_4px_12px_3px_#0000000D] rounded-3xl  ">
      <div className="border-b h-fit border-[#E6E6E6]">
        <ul className="flex">
          {list.map((item) => {
            return (
              <li
                key={item.id}
                className={
                  selected === item.id
                    ? "text-[#D3AE60] bg-[#FFFAF2] rounded-t-3xl py-4 px-6 font-black text-base"
                    : "text-[#939393] py-4 px-6 font-extrabold text-sm  "
                }
              >
                <button
                  onClick={() => setSelected(item.id)}
                  className={
                    selected === item.id
                      ? "text-[#D3AE60] font-black text-base"
                      : "text-[#939393] font-extrabold text-sm"
                  }
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-[560px] overflow-auto">
      {selected == 1 ? (
        <HotelFacilities />
      ) : selected == 4 ? (
        <Rate />
      ) : selected == 2 ? (
        <Location />
      ) : (
        selected == 3 ? (
        <ImportantPoints />
      ) :null
      )}</div>
    </div>
  );
}
