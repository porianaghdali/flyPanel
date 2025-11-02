import { Clock4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div
      className="w-full rounded-3xl grid grid-cols-2 overflow-hidden bg-white"
      style={{ boxShadow: "0px 4px 9px 3px #0000001C" }}
    >
      <div
        className="col-span-1  h-[237px] w-[372px] px-6 py-4 rounded-3xl bg-center bg-cover grid items-end"
        style={{
          backgroundImage: "url('/images/homePage/blog.png')",
        }}
      >
        <div
          style={{ backdropFilter: "blur(12px)" }}
          className="font-semibold text-base py-2 text-center mt-auto rounded-3xl bg-white/40 text-white
 "
        >
          بیشتر بخوانید
        </div>
      </div>

      <div className="p-6 flex flex-col  justify-between">
        <div className="flex justify-between items-center">
          <p className="text-xl leading-8 font-bold text-[#1C1C1F]">
            چرا برای اخذ ویزای شنگن به اثبات تمکن مالی و دارایی نیاز داریم؟
          </p>
        </div>
        <div className="flex justify-between items-center ">
          <p className="text-base font-semibold text-[#1C1C1F]"> ۱۴۰۴/۰۲/۱۷ </p>
          <div className="flex items-center gap-1 ">
            <Clock4 size={24} color="#525252" />
            <p className="text-sm font-semibold text-[#525252]">
              زمان مطالعه: ۸ دقیقه
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
