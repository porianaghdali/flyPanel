import { Calendar, Clock4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div
      className="w-full flex rounded-3xl overflow-hidden bg-white"
      style={{ boxShadow: "0px 4px 12px 3px #0000000D" }}
    >
      <Image
        src="/images/homePage/test.png"
        width={196}
        height={196}
        alt="Logo"
        className=" "
      />
      <div className="p-6  w-full flex flex-col gap-8  ">
        <div className="flex justify-between items-center ">
          <p className="text-2xl font-extrabold text-[#1C1C1F]">
            تور فرانسه + آلمان + سوئیس از مبدا تهران
          </p>
          <div className="text-xl font-medium text-[#1C1C1F] flex items-center gap-2">
            <Clock4 size={24} />
            <p>۱۱ شب و ۱۰ روز</p>
          </div>
        </div>
        <hr className="text-[#E6E6E6] w-full" />

        <div className="flex justify-between items-center">
          <div className="text-xl flex gap-2 items-center  font-medium text-[#1C1C1F]">
            <p> از ۲۹٬۹۹۹٬۱۹۰ تومان</p>+<p>۱۷۸۰ دلار</p>
          </div>
          <div className="text-xl flex gap-2 items-center font-medium text-[#1C1C1F]">
              <Calendar/><p> ویژه دی و بهمن</p>
          </div>
          <div className="text-xl flex gap-2 items-center font-medium text-[#1C1C1F]">
            <p><Calendar/> </p><p>ایران ایرتور </p>
          </div>
          <Link
            href=""
            className="text-base py-2 px-5 rounded-3xl font-semibold bg-[#D3AE60] text-white"
          >
            مشاهده تور
          </Link>
        </div>
      </div>
    </div>
  );
}
