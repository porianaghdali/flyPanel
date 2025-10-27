import { Mail, Map, PhoneCall } from "lucide-react";
import Image from "next/image";
import Faq from "../components/faq";

export default function ContactUs() {
  const list=[
    {title:"تلفن",id:1,icon:<PhoneCall color="#D3AE60"size={41}/>  ,value:"۰۲۱-۴۴۳۲۸۸۲۲"},
    {title:"ایمیل",id:2,icon:<Mail color="#D3AE60"size={41}/>,value:"rahito@gmail.com"},
    {title:"آدرس",id:3,icon:<Map color="#D3AE60"size={41}/>,value:"خیابان ولیعصر، تهران"},
  ]
  return (
    <div className="px-[5%]">
      <div className="flex flex-col gap-4  items-center mb-20">
        <h1 className="font-extrabold text-[40px] text-[#1C1C1F]">
  با راهیتو راه‌تو پیدا کن
</h1>
        <p className="font-medium text-xl text-[#1C1C1F]">
          رزرو تور های مسافرتی خارجی و داخلی با لیستی از بهترین هتل‌ها و
          اقامتگاه‌ها
        </p>
      </div>
      <div className="flex justify-between  mb-30  items-center">
          <div className="bg-[#511424] rounded-3xl p-8 w-fit flex flex-col h-fit  gap-16 ">
            {list.map((item)=>{
              return(
                <div key={item.id} className="flex items-center gap-4">
                  <div className=" ">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#FDFBF7] text-xl font-extrabold">{item.title}</p>
                    <p className="text-[#FDFBF7] text-lg font-normal">{item.value}</p>
                  </div>
                </div>
              )
            })}

        </div>
        <div>
          <Image
            src="/images/contactUs/map.png"
            width={782}
            height={446}
            alt="map"
            priority
          />
        </div>
      </div>
      <div className="mb-32">
      <Faq/></div>
    </div>
  );
}
