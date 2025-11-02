"use client";

import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const list = [
    { title: "خانه", id: "/" },
    { title: "تورهای مسافرتی", id: "/tours" },
    { title: "هتل‌ها", id: "/hotels" },
    { title: "ویزا", id: "/visa" },
    { title: "سفرنامه", id: "/blog" },
    { title: "تماس با ما", id: "/contactUs" },
  ];

  return (
    <div className="flex justify-between mb-16 px-[5%] pt-[3%]">
      <Image src="/images/logo.png" width={150} height={44} alt="Logo" />

      <ul className="flex gap-10">
        {list.map((item) => {
          const isActive = pathname === item.id; 

          return (
            <li
              key={item.id}
              className={`font-bold text-xl rounded-3xl p-3 transition-all duration-300 ${
                isActive
                  ? "bg-[#D3AE60] text-white"
                  : "hover:bg-[#D3AE60] hover:text-white text-[#1C1C1F]"
              }`}
            >
              <Link href={item.id}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      <Link
        href="/login"
        className="flex gap-2 items-center py-2.5 pr-6 pl-4 rounded-3xl bg-[#1C1C1F]"
      >
        <span className="text-white">ورود/ثبت‌نام</span>
        <CircleUserRound color="white" />
      </Link>
    </div>
  );
}
