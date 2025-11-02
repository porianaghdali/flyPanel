import StarRating from "../components/starRate";
import Image from "next/image";

export default function Card() {
  return (
    <div
      className="w-full flex rounded-3xl overflow-hidden bg-white h-fit"
      style={{ boxShadow: "0px 4px 12px 3px #0000000D" }}
    >
      <Image
        src="/images/homePage/test.png"
        width={146}
        height={146}
        alt="Logo"
        className=" "
      />
      <div className="flex justify-between p-6 w-full ">
        <div className="flex  flex-col justify-between ">
          <div className="flex   gap-6 items-center">
            <div className="flex items-center gap-1">
              <StarRating value={4.5} />
              <p>{4.5}</p>
            </div>
            <p className="text-[#555555] font-semibold text-base">۱۲۲ نظر</p>
          </div>
          <p className="text-[#1C1C1F] text-2xl font-semibold">Neva Flats</p>
          <p className="text-[#555555] font-semibold text-base">
            پارک آبی رایگان + ترانسفر بنز از فرودگاه
          </p>
        </div>
        <div className=" flex flex-col justify-between gap-2">
          <div className="text-base flex gap-1 justify-center items-center text-center text-[#1C1C1F] font-semibold">
            {" "}
            <p> از </p>
             
            <span className="text-3xl font-extrabold text-[#511424]">
              ۱۲٬۷۲۲٬۱۰۰
            </span><p> تومان </p>
            
          </div>
          <button className="text-white text-base font-bold py-3 px-4 bg-[#511424] rounded-3xl ">مشاهده جزئیات و انتخاب اتاق</button>
        </div>
      </div>
    </div>
  );
}
