"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
dayjs.extend(jalaliday);
dayjs.locale("fa");

export default function Calendar() {
  const scrollRef = useRef(null);
  const [days, setDays] = useState([]);
  const [active, setActive] = useState(0);
  const [lastDay, setLastDay] = useState(0);
  const [loading, setLoading] = useState(false);

  const generateDays = (startOffset = 0, count = 10) => {
    return Array.from({ length: count }).map((_, i) => {
      const date = dayjs()
        .calendar("jalali")
        .add(startOffset + i, "day");
      return {
        id: startOffset + i,
        day: date.format("dddd"),
        date: date.format("DD/MM"),
        fullDate: date.format("YYYY/MM/DD"),
        price: (Math.random() * 7 + 9).toFixed(1),
      };
    });
  };

  useEffect(() => {
    const initialDays = generateDays(0, 10);
    setDays(initialDays);
    setLastDay(9);
  }, []);

  const loadMoreDays = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const newStart = lastDay + 1;
      const newDays = generateDays(newStart, 10);

      setDays((prev) => [...prev, ...newDays]);
      setLastDay(newStart + 9);

      setLoading(false);
    }, 300);
  };

  const handleScroll = () => {
    if (!scrollRef.current || loading) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    const scrolledToLeft =
      Math.abs(scrollLeft) + clientWidth >= scrollWidth - 50;

    console.log("Scroll:", {
      scrollLeft,
      scrollWidth,
      clientWidth,
      scrolledToLeft,
    });

    if (scrolledToLeft) {
      loadMoreDays();
    }
  };

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;

    if (dir === "right") {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (Math.abs(scrollLeft) + clientWidth >= scrollWidth - 50) {
          loadMoreDays();
        }
      }, 400);
    } else {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#555555] font-medium text-base">
        قیمت تور در قبل و بعد از{" "}
        <span className="text-[#1C1C1F] font-bold">«تاریخ رفت»</span> انتخابی
        شما
      </p>

      <div className="shadow-[0px_4px_12px_3px_#0000000D] bg-white rounded-3xl p-6">
        <div className="flex gap-6 items-center justify-between w-full  mx-auto">
          <button
            onClick={() => scroll("right")}
            className=" bg-[#C9A64E] text-white p-3 rounded-3xl "
          >
            <ChevronRight size={32}/>
          </button>



          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-6 overflow-x-hidden gap-7  scroll-smooth no-scrollbar "
            
          >
            {days.map((d) => (
                <div key={d.id} className="flex  gap-7 items-center ">
              <div
                
                onClick={() => setActive(d.id)}
                className={`grid items-center justify-center  rounded-3xl p-4 cursor-pointer border transition-all duration-300
                ${
                  active === d.id
                    ? "border-[#511424] text-[#511424]"
                    : "border-transparent text-black"
                }`}
              >
                <p className="text-base font-semibold whitespace-nowrap text-[#555555]">
                  {d.day} - {d.date}
                </p>
                <p
                  className={`text-2xl text-center font-semibold ${
                    d.price > 13
                      ? "text-[#E46B66]"
                      : d.price < 10
                      ? "text-[#88BE66]"
                      : "text-[#1C1C1F]"
                  }`}
                >
                  {d.price}
                </p>
                <p className={`text-base whitespace-nowrap text-center font-semibold ${
                    d.price > 13
                      ? "text-[#E46B66]"
                      : d.price < 10
                      ? "text-[#88BE66]"
                      : "text-[#1C1C1F]"
                  }`}>میلیون تومان</p>
              </div>
              <hr className="w-[1px] h-16 bg-[#E6E6E6]"/>
              </div>
            ))}
          </div>



          <button
            onClick={() => scroll("left")}
            className=" bg-[#C9A64E] text-white p-3 rounded-3xl "
          >
            <ChevronLeft size={32}/>
          </button>



        </div>
      </div>
    </div>
  );
}
