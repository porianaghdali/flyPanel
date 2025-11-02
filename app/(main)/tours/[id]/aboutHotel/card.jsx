import { BusFront, Clock4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="bg-white relative rounded-3xl p-6 shadow-[0px_4px_9px_3px_#0000001C] w-fit flex flex-col gap-8 h-fit">
      <Image
        src="/images/homePage/test.png"
        width={432}
        height={340}
        alt="Logo"
        className=" min-w-[343px] max-w-[480px] min-h-[192px] max-h-[360px] rounded-3xl "
      />
      <div className="grid gap-6">
        <p className="font-medium text-[#1C1C1F] text-xl ">
          سبزترین هتل استانبول
        </p>

        <p className="text-[#212121] font-bold text-2xl ">
          Elite World Istanbul Taksim
        </p>
      </div>
      <div style={
        {
          backdropFilter: "blur(199.5182342529297px)"

        }

      } className="w-full h-full bg-[#D3AE60] opacity-40 absolute -top-[10%] left-[10%] -z-10">

      </div>
    </div>
  );
}
