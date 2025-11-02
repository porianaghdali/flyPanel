import { BusFront, Clock4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-[0px_4px_9px_3px_#0000001C] w-fit grid gap-8">
      <Image
        src="/images/homePage/test.png"
        width={432}
        height={340}
        alt="Logo"
        className=" min-w-[343px] max-w-[480px] min-h-[192px] max-h-[360px] rounded-3xl "
      />
      <div className="flex justify-between">
        <p className="text-[#212121] font-bold text-2xl leading-8">شیراز</p>
        <p className="font-medium text-[#1C1C1F] text-2xl leading-8">
          هفته دوم اردیبهشت
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-[#525252] font-semibold text-xl leading-8">
          از ۱۱٬۹۰۰٬۰۰۰ تومان
        </p>
        <div className="flex gap-1 items-center">
          <BusFront size={24} color="#525252" />
          <p className="font-semibold text-[#525252]  text-base leading-8">
            با اتوبوس
          </p>
        </div>
      </div>
    </div>
  );
}
