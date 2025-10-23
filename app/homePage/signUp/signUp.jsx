import { Mail } from "lucide-react";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="bg-[#511424] relative rounded-3xl py-16 flex justify-center items-center ">
      <div className="max-w-[677px] flex flex-col gap-16 justify-center items-center z-20 ">
        <p className=" font-bold text-[44px] text-white text-center ">
          ثبت‌نام برای دریافت آفر های ویژه و <br /> لحظه آخری!
        </p>
        <div className="bg-white rounded-3xl p-3 flex gap-2   items-center w-full">
          <Mail color="#999999" />
          <input
            placeholder="ایمیل خود را وارد کنید"
            type="text"
            className=""
            name=""
            id=""
          />
          <button className="bg-[#511424] py-3 px-4 rounded-3xl text-white mr-auto">
            ثبت ایمیل
          </button>
        </div>
      </div>
      <Image
        src="/images/homePage/signUp/Element.png"
        width={120.78292846679688}
        height={108.18169403076172}        
        alt="Logo"  className="absolute top-0 right-0"      
      />
      <Image
        src="/images/homePage/signUp/Group.png"
        width={372.4364929199222}
        height={371.9101257324222}  className="absolute left-0 bottom-0"      
        alt="Logo"        
      />
    </div>
  );
}
