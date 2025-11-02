"use client";
import { User } from "lucide-react";
import Header from "../components/accountHeader";
import Footer from "../components/accountFooter";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AccountLayout({ children }) {
  const avatar = false;
  const pathname = usePathname();

  const list = [
    { title: "  حساب کاربری", id: "profile", href: "/account" },
    { title: "تاریخچه سفرهای من", id: "history", href: "/account/history" },
    { title: "علاقه‌مندی ها", id: "interested", href: "/account/interested" },
    { title: "تراکنش‌ها و کیف‌پول", id: "wallet", href: "/account/wallet" },
  ];
  console.log(pathname);
  return (
    <div className="relative grid grid-cols-10 h-  w-full ">
      <div className="absolute left-0 top-0 w-[70%] h-full bg-white"></div>

      <div className="absolute top-0 right-0 w-[30%] h-full bg-[#E9D7AF] -z-10"></div>

      <div className="  relative z-10 col-span-10">
        <Header />
      </div>

      <div className="col-span-3  pt-[3%]   ">
        <div className="  max-w-[201px] w-full mx-auto flex flex-col gap-12 py-[5%]">
          <div>
            {avatar ? (
              <Image
                src="/images/login/loginBg.jpg"
                width={201}
                height={201}
                alt="Logo"
              />
            ) : (
              <div className="p-4 rounded-full bg-[#511424] w-fit">
                <User size={56} color="white" />
              </div>
            )}
          </div>
          <div className="grid gap-3">
            {list.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.id}
                  className={`text-start text-2xl whitespace-nowrap font-semibold pb-3 border-b-2 transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-[#511424] border-[#511424]"
                      : "text-[#1C1C1F] border-transparent"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative  z-10 col-span-7 h-full">
        <div className="  px-[15%]  py-[5%] ">
          <div className="">{children}</div>
        </div>
      </div>

      <div className="col-span-10 relative z-10">
        <Footer />
      </div>
    </div>
  );
}
