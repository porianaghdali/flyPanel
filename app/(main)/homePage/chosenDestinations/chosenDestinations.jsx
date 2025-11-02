import Image from "next/image";
import Card from "./card";

export default function ChosenDestinations() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center relative mb-2">
        <Image
          src="/images/homePage/vector.png"
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          width={420}
          height={200}
          alt="Logo"
        />
        <p className="font-extrabold text-[32px] text-[#1C1C1F] z-20">
          مقاصد برگزیده
        </p>
      </div>{" "}
      <p className="text-base font-medium text-[#1C1C1F] text-center mb-12">
        مقاصد پرطرفدار انتخاب شده توسط مسافران تور‌های زمستان-بهار
      </p>
      <div className="flex gap-6 justify-center">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
