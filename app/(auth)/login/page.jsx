import Image from "next/image";
import Header from "../../components/loginHeader";
import Footer from "@/app/components/loginFooter";
export default function LoginPage() {
  return (
    <div className="relative grid grid-cols-5 h-screen">
      <div className="col-span-2 bg-white pr-[8vw] pt-[3%]">
        <Image src="/images/logo.png" width={150} height={44} alt="Logo" />
        <h1 className="text-2xl font-bold text-center mb-4 text-[#3B53F3]">
          ورود به حساب
        </h1>
        <form className="grid gap-4">
          <input
            type="email"
            placeholder="ایمیل"
            className="border border-[#3D4B7033] p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            className="border border-[#3D4B7033] p-2 rounded-md"
          />
          <button className="bg-[#3B53F3] text-white py-2 rounded-md">
            ورود
          </button>
        </form>
      </div>

      <div
        className="relative col-span-3 h-screen"
        style={{
          backgroundImage: "url('/images/login/loginBg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(211, 174, 96, 0.8) 0%, #511424 100%)",
          }}
        ></div>
        <div className="relative z-10  flex justify-center">
          <Header />
        </div>
        <div className="relative z-10 px-[20%]  py-[5%]">
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
          <div>
            <button className="text-white text-base font-bold bg-[#D3AE60] px-4 py-3 rounded-3xl w-[248px]">
              ارتباط با پشتیبانی
            </button>
          </div>
        </div>
      
      </div>
        <div className="  px-[5%] absolute bottom-0 col-span-5 z-10  w-full">
          <Footer />
        </div>
    </div>
  );
}
