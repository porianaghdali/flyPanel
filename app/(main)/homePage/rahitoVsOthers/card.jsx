import Image from "next/image";

export default function Card({ title, description, src }) {
  return (
    <div className="relative group grid ">
      <div className="w-full flex flex-col gap-8 rounded-3xl py-12 z-10 relative transition-all duration-0 hover:bg-white hover:shadow-[0px_4px_9px_3px_#0000001C]">
        <Image
          src={src}
          width={144}
          height={144}
          alt="Logo"
          className="mx-auto"
        />

        <div className="flex flex-col gap-6 px-6">
          <div className="flex justify-center items-center">
            <p className="text-2xl font-extrabold text-[#1C1C1F] text-center">
              {title}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-xl font-medium text-[#1C1C1F] leading-8 text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    
      <Image
        src="/images/homePage/RahitoVsOthers/vector.png"
        width={86}
        height={86}
        alt="vector"
        className="mx-auto absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-0 opacity-0  group-hover:opacity-100 duration-00"
      />
    </div>
  );
}
