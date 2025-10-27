import StarRating from "@/app/components/starRate";
import {
  CarFront,
  Monitor,
  Refrigerator,
  Shield,
  Shirt,
  ShowerHead,
  Waves,
  Wifi,
} from "lucide-react";
import Image from "next/image";

export default function Location() {
  const feature = [
    { title: "اینترنت", id: 1, icon: <Wifi size={24} /> },
    { title: "گاوصندوق", id: 2, icon: <Shield size={24} /> },
    { title: "استخر", id: 3, icon: <Waves size={24} /> },
    { title: "ترانسفر", id: 4, icon: <CarFront size={24} /> },
    { title: "آسانسور", id: 5, icon: <CarFront size={24} /> },
    { title: "اتو", id: 6, icon: <Shirt size={24} /> },
    { title: "تلویزیون", id: 7, icon: <Monitor size={24} /> },
    { title: "حمام", id: 8, icon: <ShowerHead size={24} /> },
    { title: "یخچال", id: 9, icon: <Refrigerator size={24} /> },
  ];

  return (
    <div className="px-6 py-16 grid gap-4">
      <div className="grid gap-4">
        <p className="text-[#1C1C1F] text-2xl font-semibold">آدرس هتل</p>
        <div>
          <p className="text-[#555555] font-semibold text-base">
            İstanbul Green Retreat Hotel
          </p>
          <p className="text-[#555555] font-semibold text-base">
            Meşelik Sokak No:12, Beşiktaş
          </p>
          <p className="text-[#555555] font-semibold text-base">
            34353 Istanbul, Turkey
          </p>
          <p className="text-[#555555] font-semibold text-base">
            Tel: +90 212 123 45 67
          </p>
          <p className="text-[#555555] font-semibold text-base">
            Email: info@greenretreathotel.com
          </p>
        </div>
      </div>
      <div className="rounded-3xl relative h-fit ">
        <Image
          src="/images/tours/location.png"
          width={888}
          height={218}
          alt="location"
          className="w-full  "
        />
        <button className= "absolute  bottom-4 left-4 text-black font-bold text-base py-3 px-6 bg-[#D3AE60] rounded-3xl">باز کردن رو نقشه</button>
      </div>
    </div>
  );
}
