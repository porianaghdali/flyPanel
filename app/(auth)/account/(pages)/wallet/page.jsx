import { Plus } from "lucide-react";

export default function Wallet() {
  return (
    <div className="grid gap-[3vw]">
      <div>
        <div className="w-full pb-3 border-b mb-[2.5%] border-[#D3ADB7]">
          <p className="text-[#511424] font-extrabold text-xl"> کیف‌ پول </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <p className="text-[#1C1C1F] font-semibold text-xl">موجودی حساب</p>
            <p className="text-[#525252] font-semibold text-xs">
              <span className="text-xl">{0}</span> تومان
            </p>
          </div>
          <button className="text-white font-bold text-base flex gap-2 items-center bg-[#511424] rounded-3xl py-2 px-4">
            <p>افزایش اعتبار</p> <Plus />
          </button>
        </div>
      </div>
      <div>
        <div className="w-full pb-3 border-b mb-[2.5%] border-[#D3ADB7]">
          <p className="text-[#511424] font-extrabold text-xl"> تراکنش‌ها </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3 text-center justify-between text-[#1C1C1F] text-sm font-bold ">
            <p className="text-start">تاریخ و ساعت</p>
            <p className="text-start">مبلغ (تومان)</p>
            <p className="text-start">توضیحات تراکنش</p>
          </div>
          <div className="text-base font-bold text-[#1C1C1F]">
            <div className="flex items-center justify-between bg-white shadow-[0px_4px_12px_3px_#0000000D] py-3 px-6 rounded-xl">
              <p className="text-center ">۰۰:۵۰ - ۱۴۰۱/۰۵/۱۱</p>
                <div className="flex items-center gap-2 bg-[#BCFFDD] py-2 px-3 rounded-[50px] "><p className="text-center">۱۱۸,۳۴۰</p><Plus/></div>
              <p className="text-center ">کاهش شارژ / اعتبار بابت خرید خدمات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
