"use client";

import { Pen } from "lucide-react";
import { useEffect, useState } from "react";

const defaultProfile = {
  Name: "بزرگمهر پوریا",
  phone: "۰۹۳۵۶۵۶۱۹۱۹",
  nationalId: "۰۰۳۹۱۱۹۸۲۳۱",
  birthDate: "۳ خرداد ۱۳۸۱",
  email: "fatemeh.sh@gmail.com",
  password: "۱۲۳۴۵۶۷۸",
  bankAccount: "-",
  cardNumber: "۵۰۲۲-۲۹۱۰-۸۳۲۳-۴۲۱۱",
  iban: "-",
};

export default function Account() {
  const [profile, setProfile] = useState(defaultProfile);

  return (
    <div className="grid gap-[6vw]">
      <div className="">
        <div className="w-full pb-3 border-b mb-[2.5%] border-[#D3ADB7]">
          <p className="text-[#511424] font-extrabold text-xl">
            اطلاعات حساب کاربری
          </p>
        </div>
        <div className="flex justify-between">
          <div className="grid gap-5">
            <label
              className="text-[#525252] font-semibold text-base"
              htmlFor=""
            >
              شماره موبایل
            </label>
            <div className="flex  gap-2">
              <p className="text-[#1C1C1F] text-xl font-semibold">
                {profile.phone}
              </p>
              <button className="text-[#D3AE60] font-extrabold text-base flex items-center gap-1 ">
                <Pen size={24} /> <p>ویرایش</p>
              </button>
            </div>
          </div>
          <div className="grid gap-5">
            <label
              className="text-[#525252] font-semibold text-base"
              htmlFor=""
            >
              {" "}
              ایمیل
            </label>
            <div className="flex  gap-2">
              <p className="text-[#1C1C1F] text-xl font-semibold">
                {profile.email}
              </p>
              <button className="text-[#D3AE60] font-extrabold text-base flex items-center gap-1 ">
                <Pen size={24} /> <p>ویرایش</p>
              </button>
            </div>
          </div>
          <div className="grid gap-5">
            <label
              className="text-[#525252] font-semibold text-base"
              htmlFor=""
            >
              {" "}
              کلمه عبور
            </label>
            <div className="flex  gap-2">
              <p className="text-[#1C1C1F] text-xl font-semibold">
                {profile.password}
              </p>
              <button className="text-[#D3AE60] font-extrabold text-base flex items-center gap-1 ">
                <Pen size={24} /> <p>تغییر</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full pb-3 border-b mb-[2.5%] border-[#D3ADB7] flex justify-between">
          <p className="text-[#511424] font-extrabold text-xl">اطلاعات شخصی </p><button className="text-[#D3AE60] font-extrabold text-base flex items-center gap-1 ">
                <Pen size={24} /> <p>ویرایش اطلاعات</p>
              </button>
        </div>
        <div className="flex justify-between">
          <div className="grid gap-5">
            <label
              className="text-[#525252] font-semibold text-base"
              htmlFor=""
            >
              نام و نام خانوادگی{" "}
            </label>
            <div className="flex  gap-2">
              <p className="text-[#1C1C1F] text-xl font-semibold">
                {profile.Name}
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            <label
              className="text-[#525252] font-semibold text-base"
              htmlFor=""
            >
              {" "}
              کد ملی
            </label>
            <div className="flex  gap-2">
              <p className="text-[#1C1C1F] text-xl font-semibold">
                {profile.nationalId}
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            <label
              className="text-[#525252] font-semibold text-base"
              htmlFor=""
            >
              {" "}
              تاریخ تولد{" "}
            </label>
            <div className="flex  gap-2">
              <p className="text-[#1C1C1F] text-xl font-semibold">
                {profile.birthDate}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full pb-3 border-b mb-[2.5%] border-[#D3ADB7] flex justify-between">
          <p className="text-[#511424] font-extrabold text-xl">
            {" "}
            اطلاعات حساب بانکی{" "}
          </p><button className="text-[#D3AE60] font-extrabold text-base flex items-center gap-1 ">
                <Pen size={24} /> <p>ویرایش اطلاعات</p>
              </button>
        </div>
        <div className="flex justify-between">
          <div className="grid gap-5">
            <label
              className="text-[#525252] font-semibold text-base"
              htmlFor=""
            >
              شماره کارت بانکی{" "}
            </label>
            <div className="flex  gap-2">
              <p className="text-[#1C1C1F] text-xl font-semibold">
                {profile.cardNumber}
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            <label
              className="text-[#525252] font-semibold text-base"
              htmlFor=""
            >
              {" "}
              شماره شبای بانکی{" "}
            </label>
            <div className="flex  gap-2">
              <p className="text-[#1C1C1F] text-xl font-semibold">
                {profile.iban}
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            <label
              className="text-[#525252] font-semibold text-base"
              htmlFor=""
            >
              {" "}
              شماره حساب بانکی{" "}
            </label>
            <div className="flex  gap-2">
              <p className="text-[#1C1C1F] text-xl font-semibold">
                {profile.bankAccount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
