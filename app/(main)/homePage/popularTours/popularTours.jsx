import Card from "./card";

export default function PopularTours() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center relative mb-2">
        <p className="font-extrabold text-[32px] text-[#1C1C1F] z-20">
          تورهای پرطرفدار{" "}
        </p>
      </div>{" "}
      <p className="text-base font-medium text-[#1C1C1F] text-center mb-12">
        تورهای ویژه فصل و تعطیلات مهم پیش‌رو{" "}
      </p>
      <div className="flex flex-col gap-6 ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
