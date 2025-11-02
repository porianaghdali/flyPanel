"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faq() {
  const [activeId, setActiveId] = useState(null);

  const questions = [
    {
      question: "آیا امکان کنسل کردن تور وجود دارد؟",
      answer:
        '🔹 بله، اما قوانین کنسلی بسته به نوع تور و تامین‌کننده متفاوت است. شما می‌توانید از بخش "رزروهای من" درخواست کنسلی دهید و جزئیات هزینه‌های استرداد را مشاهده کنید. برخی از تورها دارای جریمه کنسلی هستند.',
      id: 1,
    },
    {
      question: "چه روش‌هایی برای پرداخت هزینه تور وجود دارد؟",
      answer:
        "🔹 پرداخت از طریق کارت‌های بانکی عضو شتاب و درگاه اینترنتی ایمن انجام می‌شود.",
      id: 2,
    },
    {
      question:
        "چگونه می‌توانم درباره شرایط ویزا و قوانین مقصد اطلاعات کسب کنم؟",
      answer:
        "🔹 در صفحه هر مقصد، بخش ویزا و مدارک لازم توضیح داده شده است. همچنین کارشناسان ما پاسخگوی شما هستند.",
      id: 3,
    },
    {
      question: "آیا امکان تغییر تاریخ سفر پس از رزرو وجود دارد؟",
      answer:
        "🔹 در برخی از تورها بله. بسته به قوانین تور، می‌توانید تاریخ را تغییر دهید.",
      id: 4,
    },
    {
      question: "آیا می‌توانم فقط هتل یا پرواز را بدون تور رزرو کنم؟",
      answer: "🔹 بله، امکان رزرو هتل یا پرواز به صورت جداگانه نیز فراهم است.",
      id: 5,
    },
    {
      question: "چطور می‌توانم از تخفیف‌ها و پیشنهادهای ویژه مطلع شوم؟",
      answer:
        "🔹 با عضویت در خبرنامه یا دنبال کردن شبکه‌های اجتماعی ما، از جدیدترین تخفیف‌ها باخبر شوید.",
      id: 6,
    },
  ];

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-12">
      <p className="text-[#1C1C1F] font-extrabold text-[32px] text-center">
        سوالات متداول
      </p>

      <div className="flex flex-col gap-4">
        {questions.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => toggleAnswer(item.id)}
              className="border border-gray-200 rounded-xl bg-[#13141F0D] px-6 py-4 cursor-pointer transition-all duration-100 hover:bg-[#13141F12]"
            >
              <div className="flex items-center justify-between">
                <p
                  className={`transition-colors duration-100 ${
                    isActive
                      ? "text-[#1C1C1F] font-semibold text-base"
                      : "text-[#525252] text-sm font-medium"
                  }`}
                >
                  {item.question}   
                </p>

                <div
                  className={`transition-transform duration-300 p-2 rounded-full ${
                    isActive ? "rotate-180 bg-[#511424] " : " bg-white"
                  }`}
                >
                  <ChevronDown size={20} color={isActive ? "#fff" : "#1C1C1F"} />
                </div>
              </div>

              <div
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  isActive
                    ? "max-h-48 opacity-100 mt-3"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="text-[#13141FE5] font-normal text-sm leading-6">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
