import Image from "next/image";
import Card from "./card";
import { Clock4 } from "lucide-react";

export default function aboutHotel() {
  const list = [
    {
      title:
        "در قلب پرجنب‌وجوش استانبول، هتلی منحصر‌به‌فرد با تم طبیعت و طراحی الهام‌گرفته از درخت و فضای سبز، تجربه‌ای متفاوت و آرامش‌بخش از اقامت را برای مهمانان خود فراهم می‌آورد. این هتل با بهره‌گیری از عناصر طبیعی مانند چوب، گیاهان زنده و نور طبیعی، محیطی دلنشین و سرشار از طراوت را در دل یکی از پررفت‌وآمدترین شهرهای جهان خلق کرده است.",
      id: 1,
    },
    {
      title:
        "اتاق‌ها با طراحی مدرن و در عین حال هماهنگ با طبیعت، فضایی آرام برای استراحت و رهایی از شلوغی روزمره فراهم می‌کنند. پنجره‌های سرتاسری با چشم‌اندازهای سرسبز، دیوارهای گیاهی و نورپردازی طبیعی، حسی از بودن در دل جنگل را در فضای یک هتل شهری بازآفرینی می‌کنند. امکانات رفاهی کامل و جزئیات هوشمندانه طراحی، اقامتی دلپذیر و راحت را تضمین می‌کنند.",
      id: 2,
    },
    {
      title:
        "بام سبز هتل، یکی از جذاب‌ترین بخش‌های آن به شمار می‌رود. این فضای باز با درختان زینتی، صندلی‌های چوبی، نورپردازی گرم و کافه‌ای با منوی متنوع از نوشیدنی‌ها و خوراکی‌های فصلی، محلی مناسب برای گذراندن عصرهای تابستانی است. در برخی شب‌ها نیز با اجرای موسیقی زنده، فضای رمانتیک و خاصی برای مهمانان ایجاد می‌شود.",
      id: 3,
    },
    {
      title:
        "اگر به‌دنبال اقامتی متفاوت با حال‌وهوایی سرشار از آرامش، زیبایی طبیعی و طراحی منحصربه‌فرد هستید، این هتل سبز در استانبول گزینه‌ای ایده‌آل برای سفرهای تابستانی شما خواهد بود. ترکیبی از طبیعت و معماری مدرن که تجربه‌ای ماندگار را برای مهمانان رقم می‌زند.",
      id: 4,
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-6 justify-center">
        <div className="  ">
          <p className="font-bold text-2xl text-[#5E6282] mb-5">
            درباره هتل «Elite World Istanbul Taksim» استانبول
          </p>
          <p className="font-black text-5xl text-[#14183E] mb-12">
            یک خوشگذرونی تابستونی!
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
          <div className="p-4 grid gap-4 rounded-3xl bg-white shadow-[4px_4px_12px_3px_#0000000D]
           absolute top-[35%] right-[30%] z-20 -translate-y-1/2">
            <div className="grid gap-4 items-center ">
              <Image
                src="/images/homePage/test.png"
                width={112}
                height={112}
                alt=""
                className="rounded-full"
              />
              <div>
                <p className="text-[#84829A] font-medium text-lg leading-[125%]">
                  استخر بازی
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 grid gap-4 rounded-3xl bg-white shadow-[4px_4px_12px_3px_#0000000D] absolute top-0 right-0 z-10 ">
            <div className="grid gap-4 items-center ">
              <Image
                src="/images/homePage/test.png"
                width={166}
                height={166}
                alt=""
                className="rounded-full"
              />
              <div>
                <p className="text-[#84829A] font-medium text-lg leading-[125%]">
                  کافه ۲۴/۷
                </p>
              </div>
            </div>
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
}
