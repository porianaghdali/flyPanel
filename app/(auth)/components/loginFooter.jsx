import { CircleUserRound, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const links = [
    {
      title: "تورهای داخلی",
      id: "Domestic Tours",
    },
    {
      title: "تورهای خارجی",
      id: "Foreign tours",
    },
    {
      title: "لیست هتل‌ها",
      id: "hotels",
    },
    {
      title: "مقاصد پرطرفدار",
      id: "Popular destinations",
    },
  ];
  const moreLinks = [
    {
      title: "ویزای توریستی",
      id: "Tourist visa",
    },
    {
      title: "دانستنی‌های سفر",
      id: "Travel information",
    },
    {
      title: "باشگاه مشتریان",
      id: "Customer club",
    },
    {
      title: "سفرنامه",
      id: "blogs",
    },
  ];
  const contactUs = [
    {
      title: "پشتیبانی",
      id: "Support",
    },
    {
      title: "سوالات متداول",
      id: "faq",
    },
    {
      title: "اطلاعات تماس",
      id: "Contact information",
    },
    {
      title: "همکاری با ما",
      id: "Cooperate with us",
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-2 justify-between  px-[5%] mb-8 pb-8 pt-[3%] border-b border-[#9999998F]">
        <div className="max-w-[241px]">
          <Image
            src="/images/logo.png"
            width={150}
            height={44}
            alt="Logo"
            className="mb-2"
          />
          <p className="font-medium text-sm text-[#1C1C1F] mb-3 pb-4">
            رزرو تور های مسافرتی خارجی و داخلی با لیستی از بهترین هتل‌ها و
            اقامتگاه‌ها
          </p>
          <div className="flex gap-5">
            <button className="bg-white p-4 shadow-[0px_1.83px_9.15px_0px_#0000001A] w-fit rounded-full text-[#444444] hover:bg-[#511424] hover:text-white ">
              <Twitter />
            </button>
            <button className="bg-white p-4 shadow-[0px_1.83px_9.15px_0px_#0000001A] w-fit rounded-full text-[#444444] hover:bg-[#511424] hover:text-white ">
              <Instagram />
            </button>
            <button className="bg-white p-4 shadow-[0px_1.83px_9.15px_0px_#0000001A] w-fit rounded-full text-[#444444] hover:bg-[#511424] hover:text-white ">
              <Facebook />
            </button>
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-8">
            <p className="font-semibold text-xl text-[#222222]">لینک ها اصلی</p>
            <div className=" grid gap-4">
              {links.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href=""
                    className=" text-white font-normal text-base"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-semibold text-xl text-[#222222]">تماس با ما</p>
            <div className=" grid gap-4">
              {contactUs.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href=""
                    className=" text-white font-normal text-base"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-semibold text-xl text-[#222222]">
              لینک های بیشتر
            </p>
            <div className=" grid gap-4">
              {moreLinks.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href=""
                    className=" text-white font-normal text-base"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="  px-[5%] flex justify-between mb-12">
        <p className=" text-[#666666] text-sm font-medium">قوانین و مقررات استفاده</p>
        <p className=" text-white text-sm font-medium">حق کپی رایت، محفوظ به راهیتو است.</p>
      </div>
    </>
  );
}
