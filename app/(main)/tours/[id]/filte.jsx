import { Clock, Clock4 } from "lucide-react";

export default function Filter() {
  return (
    <div className="shadow-[0px_4px_12px_3px_#0000000D] min-w-[296px] h-full p-6 rounded-3xl bg-white flex flex-col justify-between gap-8">
      <div className="flex items-center justify-start gap-2 text-[#555555]">
        <Clock4 size={24} color="#555555" />
        <p className="font-medium text-xl">۶ شب اقامت</p>
      </div>
      <select name="" id="">
        <option value="1">1</option>
      </select>
      <select name="" id="">
        <option value="1">1</option>
      </select>
      <hr className="h-[1px] text-[#E6E6E6]" />
<select name="" id="">
        <option value="1">1</option>
      </select>
      <button className="text-white font-bold text-base bg-[#511424] py-3 px-4 w-full rounded-3xl">
        انتخاب اتاق
      </button>
    </div>
  );
}
