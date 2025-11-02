import Image from "next/image";
import Header from "../../components/loginHeader";
import Footer from "@/app/components/loginFooter";

export default function LoginPage() {
  return (
    <div className="relative grid grid-cols-5 h-  w-full ">
      <div
        className="absolute left-0 top-0 w-[60%] h-full"
        style={{
          backgroundImage:
            "url('/images/login/loginBg.jpg'); background-size: cover; background-position: center;",
        }}
      ></div>

      <div
        className="absolute left-0 top-0 w-[60%] h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(211,174,96,0.8) 0%, #511424 100%);",
        }}
      ></div>

      <div className="absolute top-0 right-0 w-[40%] h-full bg-white -z-10"></div>

   <div className="  relative z-10 col-span-5">
          <Header />
        </div>

      <div className="col-span-2  pt-[3%]  justify- ">
        {/* <div className="px-[5%] pt-[3%]">
          <Image
            src="/images/logo.png"
            className=""
            width={150}
            height={44}
            alt="Logo"
          />
        </div> */}

        <div className="  max-w-[381px] w-full mx-auto  py-[5%]">
          <form className="grid gap-8  ">
            {" "}
            <h1 className="text-[40px] font-extrabold text-start  text-[#1C1C1F]">
              ورود/ثبت نام
            </h1>
            <div className=" relative">
              {" "}
              <label
                htmlFor="number"
                className="text-[#555555] font-semibold text-base absolute bg-white right-4 px-1 -translate-y-1/2"
              >
                تلفن همراه
              </label>
              <input
                type="text"
                id="number"
                placeholder=""
                className="border-[1px] border-[#E6E8E7] px-2 pt-2.5 pb-3 rounded-md w-full"
              />
            </div>
            <div className="grid gap-2.5">
              <button className="bg-[#511424] rounded-3xl text-white py-2  font-bold text-base">
                ارسال رمز یک‌بار مصرف
              </button>
              <div className="text-sm leading-6 flex gap-2.5">
                <p className="text-[#1C1C1F] font-normal ">
                  رمز عبور خود را فراموش کرده‌اید؟
                </p>
                <button className="text-[#511424] font-bold  ">
                  بازیابی رمز عبور
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="relative  z-10 col-span-3 h-full">
     
        <div className="  px-[20%]  py-[5%]">
          <div className="mb-5">
            <p className="text-xl font-medium text-black">ارتباط با ما</p>
            <p className="text-[#1C1C1F] font-extrabold text-[40px]">
              پشتیبانی
            </p>
          </div>
          <div className="grid mb-8">
            <p className="text-[#13141FE5] font-bold text-sm mb-5">
              آژانس مسافرتی راهیتو با هدف ارائه خدمات حرفه‌ای و تجربه‌ای متفاوت
              در زمینه سفر، گردشگری و خدمات ویزا تأسیس شده است. ما در راهیتو بر
              این باوریم که سفر فقط جابجایی از یک مقصد به مقصدی دیگر نیست، بلکه
              سفری به سوی کشف، آرامش و خلق خاطراتی ماندگار است.
            </p>
            <div className="text-[#13141FE5] text-sm font-normal">
              <p className="font-bold">
                با راهیتو، سفر را از رؤیا به واقعیت تبدیل کنید.
              </p>
              <p>
                برای کسب اطلاعات بیشتر، رزرو خدمات یا مشاوره، از طریق وب‌سایت ما
                یا شماره تماس پشتیبانی اقدام فرمایید.
              </p>
            </div>
          </div>
          <div className="mb-[20%]">
            <button className="text-white text-base font-bold bg-[#D3AE60] px-4 py-3 rounded-3xl w-[248px]">
              ارتباط با پشتیبانی
            </button>
          </div>
        </div>
      </div>


      <div className="col-span-5 relative z-10"><Footer/></div>
      
    </div>
  );
}
