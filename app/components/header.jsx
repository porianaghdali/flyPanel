import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const list = [
    {
      title: "خانه",
      id: "home",
    },
    {
      title: "تورهای مسافرتی",
      id: "tours",
    },
    {
      title: "هتل‌ها",
      id: "hotels",
    },
    {
      title: "ویزا",
      id: "visa",
    },
    {
      title: "سفرنامه",
      id: "blog",
    },
    {
      title: "تماس با ما",
      id: "contantUs",
    },
  ];
  return (
    <div className="flex justify-between mb-16 px-[7%] pt-[3%]">
      <Image src="/images/logo.png" width={150} height={44} alt="Logo" />
      <ul className="flex gap-10 ">
        {list.map((item) => (
          <li
            className="font-bold text-xl rounded-3xl p-3 hover:bg-[#D3AE60] hover:text-white"
            key={item.id}
          >
            <Link href={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link
        href="sing-up"
        className="flex gap-2 items-center py-2.5 pr-6 pl-4 rounded-3xl bg-[#1C1C1F] "
      >
        {" "}
        <span className="text-white"> ورود/ثبت‌نام </span>
        <CircleUserRound color="white" />
      </Link>
    </div>
  );
}
