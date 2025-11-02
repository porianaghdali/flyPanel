import StarRating from "@/app/(main)/components/starRate";
import { CarFront, Monitor, Refrigerator, Shield, Shirt, ShowerHead, Waves, Wifi } from "lucide-react";

export default function HotelFacilities() {
  const feature = [
    { title: "اینترنت", id: 1, icon: <Wifi size={24}/> },
    { title: "گاوصندوق", id: 2, icon: <Shield size={24}/> },
    { title: "استخر", id: 3, icon: <Waves size={24}/> },
    { title: "ترانسفر", id: 4, icon: <CarFront size={24} />},
    { title: "آسانسور", id: 5, icon: <CarFront size={24} />  },
    { title: "اتو", id: 6, icon:<Shirt size={24} /> },
    { title: "تلویزیون", id: 7, icon: <Monitor size={24}/> },
    { title: "حمام", id: 8, icon: <ShowerHead size={24} /> },
    { title: "یخچال", id: 9, icon: <Refrigerator size={24} /> },
  ];

  return (
    <div className="px-6 py-16 grid gap-12">
      <ul className="grid grid-cols-5 gap-6">
        {feature.map((item) => {
          return (
            <li
              className="bg-[#EEEDED] rounded-3xl text-center  p-3   text-[#1C1C1F] text-xl font-semibold flex items-center gap-3"
              key={item.id}
            >
              {item.icon}
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
