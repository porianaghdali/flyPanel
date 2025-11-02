import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-4  items-center">
        <h1 className="font-extrabold text-[40px] text-[#1C1C1F]">
          با راهیتو راه‌تو پیدا کن
        </h1>
        <p className="font-medium text-xl text-[#1C1C1F]">
          رزرو تور های مسافرتی خارجی و داخلی با لیستی از بهترین هتل‌ها و
          اقامتگاه‌ها
        </p>
      </div>
      <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/homePage/findTicketBg.png"
          width={974}
          height={402}
          alt="پس‌زمینه تورهای مسافرتی"
          priority
          className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
        />

        <Image
          src="/images/homePage/findTicketImage.png"
          width={1353}
          alt="جستجوی تورهای مسافرتی"
          height={190}
          priority
          className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
