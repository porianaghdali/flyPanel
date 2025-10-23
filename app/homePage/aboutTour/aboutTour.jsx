import Image from "next/image";
import Card from "./card";
import { Clock4 } from "lucide-react";

export default function AboutTour() {
  const list = [
    {
      title:
        'بله، اما قوانین کنسلی بسته به نوع تور و تامین‌کننده متفاوت است. شما می‌توانید از بخش "رزروهای من" درخواست کنسلی دهید و جزئیات هزینه‌های استرداد را مشاهده کنید. برخی از تورها دارای جریمه کنسلی هستند. بله، اما قوانین کنسلی بسته به نوع تور و تامین‌کننده متفاوت است. شما می‌توانید از بخش "رزروهای من" درخواست کنسلی دهید و جزئیات هزینه‌های استرداد را مشاهده کنید. برخی از تورها دارای جریمه کنسلی هستند.',
      id: 1,
    },
    {
      title:
        'بله، اما قوانین کنسلی بسته به نوع تور و تامین‌کننده متفاوت است. شما می‌توانید از بخش "رزروهای من" درخواست کنسلی دهید و جزئیات هزینه‌های استرداد را مشاهده کنید. برخی از تورها دارای جریمه کنسلی هستند.',
      id: 2,
    },
    {
      title:
        'بله، اما قوانین کنسلی بسته به نوع تور و تامین‌کننده متفاوت است. شما می‌توانید از بخش "رزروهای من" درخواست کنسلی دهید و جزئیات هزینه‌های استرداد را مشاهده کنید. برخی از تورها دارای جریمه کنسلی هستند.',
      id: 3,
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-6 justify-center">
        <div className="  ">
          <p className="font-bold text-2xl text-[#5E6282] mb-5">
            درباره تورهای راهیتو
          </p>
          <p className="font-black text-5xl text-[#14183E mb-12">
            حساب شده سفر بریم!
          </p>
          <ul className="list-disc flex flex-col  gap-12 pr-4 pl-16">
            {list.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-[#13141FE5] font-normal leading-6 text-sm"
                >
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" flex justify-end relative">
          <div className="p-8 grid gap-6 rounded-3xl bg-white shadow-[0px_4px_9px_3px_#0000001C] absolute top-[55%] right-0 -translate-y-1/2">
            <div className="flex gap-4 items-center ">
              {" "}
              <Image
                src="/images/homePage/test.png"
                width={66.5}
                height={66.5}
                alt=""
                className="rounded-full"
              />
              <div>
                <p className="text-[#84829A] font-medium text-lg leading-[125%]">
                  برنامه سفر
                </p>
                <p className="font-medium text-2xl text-[#1C1C1F]">
                  باغ ارم + آرامگاه حافظ...
                </p>
              </div>
            </div>
            <div className="grid gap-3">
              <p className="font-medium text-lg leading-[125%] text-[#1C1C1F]">
                <span className="text-[#511424]">۴۰٪</span> کامل شده
              </p>
              <div className="bg-[#F5F5F5] rounded-[40px] h-[6.68px]">
                <div className="bg-[#511424] rounded-[40px] h-[6.68px] w-[40%] ">

                </div>
              </div>
            </div>
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
}
