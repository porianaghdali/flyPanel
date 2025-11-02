import Image from "next/image";
import Card from "./card";

export default function ChosenDestinations() {
  return (
    <div className="w-full">
      <div className="flex  justify-center relative mb-4 gap-2"><Image
              src="/images/homePage/intenalTitle.png"
              width={30}
              height={46}
              alt="discount"
              className=""
            />
        
        <p className="font-extrabold text-[32px] text-[#1C1C1F] ">
          تورهای داخلی{" "}
        </p>
      </div>{" "}
      <p className="text-base font-medium text-[#1C1C1F] text-center mb-12">
        تورهای ویژه ارزان قیمت و زمینی{" "}
      </p>
      <div className="flex gap-6 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
