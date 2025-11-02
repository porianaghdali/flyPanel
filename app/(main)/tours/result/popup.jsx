"use client";
import { Bed } from "lucide-react";
import { useState } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full text-[#511424] font-extrabold flex gap-1 border border-[#511424] justify-center text-base bg-white py-3 px-4 rounded-3xl"
      >
        <Bed size={24} /> <p>تغییر اتاق</p>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[400px] rounded-2xl p-6 shadow-xl relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              عنوان پاپ‌آپ
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              این یه متن تستی داخل پاپ‌آپه. می‌تونی اینجا هر چیزی بذاری مثل فرم،
              هشدار یا توضیح.
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all"
              >
                بستن
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all">
                تایید
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
