"use client";

import { useState, useRef, useEffect } from "react";

export default function RangeSlider({
  min = 0,
  max = 563789,
  step = 1,
  defaultValue = [20, 345221],
  onChange,
}) {
  const [values, setValues] = useState(defaultValue);
  const [activeThumb, setActiveThumb] = useState(null);
  const sliderRef = useRef(null);

  const getPercent = (val) => ((val - min) / (max - min)) * 100;

  const calculateValue = (clientX) => {
    if (!sliderRef.current) return 0;

    const rect = sliderRef.current.getBoundingClientRect();
    const percent = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100)
    );
    return Math.round(((percent / 100) * (max - min) + min) / step) * step;
  };

  const handleTrackClick = (e) => {
    // اگر روی دایره کلیک شده، کاری نکن
    if (
      e.target !== sliderRef.current &&
      !e.target.classList.contains("track-line")
    )
      return;

    const clickValue = calculateValue(e.clientX);

    // محاسبه فاصله از هر دایره
    const distanceToFirst = Math.abs(clickValue - values[0]);
    const distanceToSecond = Math.abs(clickValue - values[1]);

    const newValues = [...values];

    // نزدیک‌ترین دایره رو جابجا کن
    if (distanceToFirst < distanceToSecond) {
      newValues[0] = clickValue;
    } else {
      newValues[1] = clickValue;
    }

    setValues(newValues);
    onChange?.(newValues);
  };

  const handleMouseDown = (index, e) => {
    e.stopPropagation();
    setActiveThumb(index);
  };

  const handleMove = (clientX) => {
    if (activeThumb === null || !sliderRef.current) return;

    const value = calculateValue(clientX);
    const newValues = [...values];
    newValues[activeThumb] = value;

    setValues(newValues);
    onChange?.(newValues);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setActiveThumb(null);
  };

  useEffect(() => {
    if (activeThumb !== null) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleMouseUp);
      };
    }
  }, [activeThumb, values]);

  const sortedValues = [...values].sort((a, b) => a - b);

  return (
    <>
      <div className="w-full p-4">
        <div
          ref={sliderRef}
          className="relative h-2 bg-gray-300 rounded-full cursor-pointer"
          onClick={handleTrackClick}
        >
          {/* خط آبی بین دو دایره */}
          <div
            className="absolute h-full bg-[#D3AE60] rounded-full track-line pointer-events-none"
            style={{
              left: `${getPercent(sortedValues[0])}%`,
              width: `${
                getPercent(sortedValues[1]) - getPercent(sortedValues[0])
              }%`,
            }}
          />

          {/* دایره اول */}
          <div
            className={`absolute top-1/2 w-[18px] h-[18px] bg-[#D3AE60] border-2 border-[#D3AE60] rounded-full shadow-md cursor-grab transition-transform ${
              activeThumb === 0 ? "scale-125" : "hover:scale-110"
            }`}
            style={{
              left: `${getPercent(values[0])}%`,
              transform: `translate(-50%, -50%)`,
              zIndex: activeThumb === 0 ? 20 : 10,
            }}
            onMouseDown={(e) => handleMouseDown(0, e)}
            onTouchStart={(e) => handleMouseDown(0, e)}
          />

          {/* دایره دوم */}
          <div
            className={`absolute top-1/2 w-[18px] h-[18px] bg-[#D3AE60] border-2 border-[#D3AE60] rounded-full shadow-md cursor-grab transition-transform ${
              activeThumb === 1 ? "scale-125" : "hover:scale-110"
            }`}
            style={{
              left: `${getPercent(values[1])}%`,
              transform: `translate(-50%, -50%)`,
              zIndex: activeThumb === 1 ? 20 : 10,
            }}
            onMouseDown={(e) => handleMouseDown(1, e)}
            onTouchStart={(e) => handleMouseDown(1, e)}
          />
        </div>

        {/* نمایش مقادیر */}
      </div>
      <div className="flex flex-col gap-7 mt-6 text-sm w-full text-gray-600">
        <div className="text-[#1C1C1F] w-full font-semibold flex justify-between items-center px-2 py-2.5 border border-[#E6E8E7]  rounded-lg ">
          <p className=" text-xl">
            {values[1] > values[0] ? Number(values[1]).toLocaleString('en-US') : Number(values[0]).toLocaleString('en-US')}
          </p>
          <p className="text-base">تومان</p>
        </div>
        <div className="text-[#1C1C1F] w-full font-semibold flex justify-between items-center px-2 py-2.5 border border-[#E6E8E7]  rounded-lg">
          <p className=" text-xl">
            {values[0] < values[1] ? Number(values[0]).toLocaleString('en-US') : Number(values[1]).toLocaleString('en-US')}
          </p>
          <p className="text-base">تومان</p>
        </div>
      </div>
    </>
  );
}
