"use client"
import { Clock4 } from "lucide-react";
import Filter from "./filter";
import Card from "./card";


export default function Result() {

  return (
    <div className="w-full">
      <div className="flex justify-between  items-center mb-3">
        <div className="flex gap-3 items-center">
          <p className="text-[#555555] font-medium text-base">
            ۱۰۳ نتیجه برای تور
          </p>
          <p className="text-[#1C1C1F] text-2xl font-semibold">
            تهران به استانبول
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Clock4 size={24} color="#555555" />
          <p className="text-[#555555] font-medium text-xl ">۶ شب اقامت</p>
        </div>
      </div>
      <div
        className="shadow-[0px_4px_12px_3px_#0000000D] bg-white p-6 rounded-3xl flex gap-8 mb-8
"
      >
        <p className="text-[#555555] font-semibold text-base ">
          مرتب سازی بر اساس:
        </p>
       <Filter/>
      </div>




      <div  className="grid gap-6">
        <Card id={1}/>
        <Card id={1}/>
        <Card id={1}/>
        <Card id={1}/>
        <Card id={1}/>
        <Card id={1}/>
        <Card id={1}/>
        <Card id={1}/>
       
        </div>
    </div>
  );
}
