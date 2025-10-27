

"use client"
import { useState } from "react";




export default function Filter() {
      const list = [
        { title: "پیشنهاد راهیتو", id: 1 },
        { title: "ارزان‌ترین", id: 2 },
        { title: "گران‌ترین", id: 3 },
        { title: "محبوب‌ترین", id: 4 },
      ];
      const [selected, setSelected] = useState(1);
    return <div>
          <ul className="flex">
            {list.map((item) => {
              return (
                <li
                  key={item.id}
                  className={
                    selected === item.id
                      ? "text-[#D3AE60] font-semibold text-sm py-1 px-4 bg-[#FFFAF2] rounded-4xl"
                      : "text-[#999999] font-normal text-sm py-1 px-4"
                  }
                >
                  <button
                    onClick={() => {
                      setSelected(item.id);
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>;
}