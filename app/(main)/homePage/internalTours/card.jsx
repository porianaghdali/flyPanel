import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div
      className="w-full rounded-3xl  relative bg-white"
      style={{ boxShadow: "0px 4px 9px 3px #0000001C" }}
    >
      <Image
        src="/images/homePage/test.png"
        width={300}
        height={300}
        alt="Logo"
        className=" w-full rounded-t-3xl"
      />
      <Image
        src="/images/homePage/internalSvg.png"
        width={91}
        height={91}
        alt="discount"
        className="  absolute top-0 right-4 translate-x-1/2 -translate-y-1/2"
      />
      <div className="py-6 px-3 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-extrabold text-[#1C1C1F]">زمینی وان</p>
          <p className="text-xl font-medium text-[#1C1C1F]">اسفند</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium text-[#1C1C1F]">از ۲۹٬۹۹۹٬۱۹۰ تومان</p>
          <Link
            href=""
            className="text-base py-2 px-5 rounded-3xl font-semibold bg-[#511424] text-white"
          >
            مشاهده
          </Link>
        </div>
      </div>
    </div>
  );
}
