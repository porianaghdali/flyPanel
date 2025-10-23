import { PlaneTakeoff } from "lucide-react";

export default function Select() {
  const list = [
    { title: "تهران", id: "IKIA", airPort: "فرودگاه بین‌المللی امام خمینی" },
    { title: "مشهد", id: "MHD", airPort: "فرودگاه شهید هاشمی‌نژاد" },
    { title: "شیراز", id: "SYZ", airPort: "فرودگاه شهید دستغیب" },
  ];

  return (
    <div className="flex items-center w-fit py-3 px-4 border rounded-lg gap-3 border-[#E6E8E7] bg-white   transition-all duration-200">
      <PlaneTakeoff
        size={20}
        color="#555555"
        className="-scale-x-100"
      />
      <div className="flex flex-col">
        <select
          name="start"
          id="start"
          className="text-[#1C1C1F] text-sm font-medium bg-transparent focus:outline-none cursor-pointer appearance-none pr-5"
        >
          {list.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title} ({item.id})
            </option>
          ))}
        </select>
        <p className="text-[#999999] font-normal text-[10px]">
          فرودگاه بین‌المللی امام خمینی
        </p>
      </div>

    
    </div>
  );
}
