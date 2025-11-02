import Card from "../../card";

export default function Interested() {
  return (
    <div className="grud  ">
      <div className="w-full pb-3 border-b mb-[2.5%] border-[#D3ADB7]">
        <p className="text-[#511424] font-extrabold text-xl">علاقه‌مندی ها </p>
      </div>
      <div className="max-h-[656px] w-full overflow-y-auto">
      <div className="flex flex-col w-full scroll-px-2.5 gap-8 ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div></div>
    </div>
  );
}
