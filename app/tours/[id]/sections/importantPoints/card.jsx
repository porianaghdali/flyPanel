import { CarFront, LineSquiggle } from "lucide-react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="flex gap-6">
      <Image
        src="/images/homePage/test.png"
        className="rounded-3xl"
        alt="point"
        width={108}
        height={108}
      />
      <div className="flex flex-col justify-between">
        <p className="text-[#1C1C1F] font-semibold text-2xl">مسجد اباصوفیه</p>
        <div className="flex">
          <div className="text-[#525252] flex gap-2 p-3">
            <CarFront size={24} />
            <p className="font-semibold text-base">۱۲ دقیقه</p>
          </div>
          <div className="text-[#525252] flex gap-2 p-3">
            <CarFront size={24} />
            <p className="font-semibold text-base">۱۲ دقیقه</p>
          </div>
          <div className="text-[#525252] flex gap-2 p-3">
            <LineSquiggle size={24} />
            <p className="font-semibold text-base">۴ کیلومتر و ۱۷۳ متر</p>
          </div>
        </div>
      </div>
    </div>
  );
}
