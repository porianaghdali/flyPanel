import StarRating from "@/app/components/starRate";
import { Bed, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card({id}) {
  const list = [
    { title: "اتاق استاندارد", id: 1 },
    { title: "همراه با صبحانه", id: 2 },
    { title: "ترانسفر فرودگاهی", id: 3 },
    { title: "بیمه", id: 4 },
    { title: "راهنما", id: 5 },
  ];
  return (
    <div className="shadow-[0px_4px_12px_3px_#0000000D] p-6 rounded-3xl bg-white">
      <div>
        <Image
          src="/images/tours/test.png"
          width={888}
          height={122}
          alt="Logo"
          className="w-full rounded-3xl mb-6"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <p className="text-[#1C1C1F] font-semibold text-2xl ml-3">
            Neva Flats
          </p>
          <div className="flex items-center gap-1 ml-6">
            <StarRating value={4.5} />{" "}
            <p className="text-[#1C1C1F] font-semibold text-base">4.5</p>
          </div>
          <p className="text-base font-semibold text-[#555555]">۱۲۲ نظر</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#511424] text-[28px] font-extrabold ">
            ۱۲٬۷۲۲٬۱۰۰
          </p>

          <p className="text-[#1C1C1F] font-semibold text-base">تومان</p>
        </div>
      </div>



      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 ">
          <div className="grid gap-3">
            <ul className="flex">
              {list.map((item, array, key) => {
                return (
                  <li
                    className={
                      list.length != item.id
                        ? "px-6 border-l border-[#B1B3C8] text-[#555555] font-semibold text-base"
                        : "px-6  text-[#555555] font-semibold text-base"
                    }
                    key={item.id}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
            <div className="grid ">
              <div className=" bg-[#FDFBF7] py-4 px-5 grid grid-cols-3 justify-between rounded-tr-3xl rounded-tl-xl rounded-br-xl">
                <div className="grid gap-2 justify-start">
                  <div className="text-[#1C1C1F] text-sm font-normal flex gap-2 items-center justify-center">
                    <p>فرودگاه امام خمینی</p>
                    <p>IKAC</p>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-[#1C1C1F] text-sm font-black"> تهران</p>{" "}
                    <p className="text-[#525252] font-medium text-base">
                      ۱۹:۰۰
                    </p>{" "}
                  </div>
                </div>



                <div className="grid gap-2 justify-center">
                  <div className="text-[#1C1C1F] flex gap-2 items-center justify-center">
                    <p className="font-extrabold text-lg">ایران ایرتور</p>
                    <div className="flex items-center text-[#511424] gap-2">
                      <p className="font-semibold text-base">رفت</p>
                      <Plane size={24} className=" -rotate-135" />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center justify-center text-[#1C1C1F] text-sm font-semibold">
                    <p className=""> ۲۸ اسفند</p> -
                    <p className="">۳ فروردین </p>{" "}
                  </div>
                </div>

                <div className="grid gap-2  justify-end">
                  <div className="text-[#1C1C1F] text-sm font-normal flex gap-2 items-center justify-center">
                    <p>فرودگاه بین المللی استانبول</p>
                    <p>IST</p>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-[#1C1C1F] text-sm font-black">
                      {" "}
                      استانبول
                    </p>{" "}
                    <p className="text-[#525252] font-medium text-base">
                      ۱۰:۳۰{" "}
                    </p>{" "}
                  </div>
                </div>
              </div>
              <Image
                src="/images/tours/line.png"
                width={606}
                height={1}
                alt="Logo"
                className="w-[94%] mx-auto"
              />{" "}
              <div className=" bg-[#FDFBF7] py-4 px-5 grid grid-cols-3 justify-between rounded-tr-3xl rounded-tl-xl rounded-br-xl">
                <div className="grid gap-2 justify-start">
                  <div className="text-[#1C1C1F] text-sm font-normal flex gap-2 items-center justify-center">
                    <p>فرودگاه بین المللی استانبول</p>
                    <p>IST</p>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-[#1C1C1F] text-sm font-black">
                      {" "}
                      استانبول
                    </p>{" "}
                    <p className="text-[#525252] font-medium text-base">
                      ۱۰:۳۰{" "}
                    </p>{" "}
                  </div>
                </div>

                <div className="grid gap-2 justify-center">
                  <div className="text-[#1C1C1F] flex gap-2 items-center justify-center">
                    <p className="font-extrabold text-lg">ایران ایرتور</p>
                    <div className="flex items-center text-[#511424] gap-2">
                      <Plane size={24} className=" rotate-45" />
                      <p className="font-semibold text-base">برگشت</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center justify-center text-[#1C1C1F] text-sm font-semibold">
                    <p className=""> ۲۸ اسفند</p> -
                    <p className="">۳ فروردین </p>{" "}
                  </div>
                </div>

                <div className="grid gap-2 justify-end">
                  <div className="text-[#1C1C1F] text-sm font-normal flex gap-2 items-center justify-center">
                    <p>فرودگاه امام خمینی</p>
                    <p>IKAC</p>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-[#1C1C1F] text-sm font-black"> تهران</p>{" "}
                    <p className="text-[#525252] font-medium text-base">
                      ۱۹:۰۰
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-span-1 flex flex-col justify-center gap-3">
          <Link href={`/tours/${id}`} className="text-center  text-white font-bold text-base bg-[#511424] py-3 px-4 rounded-3xl">
            توضیحات و خرید آنلاین
          </Link>
          <div className="flex font-semibold text-xs items-center px-3 text-[#555555] justify-between">
            <p>مجموع ۲ نفر</p>
            <p>۲۵٬۴۴۴٬۲۰۰ تومان</p>
          </div>
          <button className=" text-[#511424] font-extrabold flex gap-1 border border-[#511424] justify-center text-base bg-white py-3 px-4 rounded-3xl">
            <Bed size={24} /> <p>تغییر اتاق</p>{" "}
          </button>
           <button className=" text-[#D3AE60] font-extrabold flex gap-1 border border-[#D3AE60] justify-center text-base bg-white py-3 px-4 rounded-3xl">
            <Plane className=" -rotate-45" size={24} /> <p> تغییر پرواز</p>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
