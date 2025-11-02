import Image from "next/image";
import Card from "./card";
import { Clock4 } from "lucide-react";

export default function Blogs() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center relative mb-2">
        <p className="font-extrabold text-[32px] text-[#1C1C1F] z-20">
          سفرنامه‌ها و مجله گردشگری{" "}
        </p>
      </div>{" "}
      <p className="text-base font-medium text-[#1C1C1F] text-center mb-12">
        هرچه راجب سفر نیاز دارید، را بخوانید{" "}
      </p>
      <div className="flex gap-6 justify-center">
        <div className="w-[38%]  h-fit rounded-3xl bg-white shadow-[0px_4px_9px_3px_#0000001C]">
            <div
        className="col-span-1  h-[340px] w-full px-6 py-4 rounded-3xl bg-center bg-cover grid items-end"
        style={{
          backgroundImage: "url('/images/homePage/blog.png')",
        }}
      ><div
          style={{ backdropFilter: "blur(12px)" }}
          className="font-semibold text-base py-2 text-center mt-auto rounded-3xl bg-white/40 text-white
 "
        >
          بیشتر بخوانید
        </div></div>
          <div className="p-6">
            <p className="font-bold text-2xl leading-8 text-[#212121]">
              چه مواردی را برای سفر به مسکو در تابستان بدانیم؟
            </p>
            <div>
              <p>۱۴۰۴/۰۲/۱۷</p>
              <div className="flex gap-1 items-center">
                <Clock4 size={24} />
                <p>زمان مطالعه: ۵ دقیقه</p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="grid gap-6 w-[62%] ">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
