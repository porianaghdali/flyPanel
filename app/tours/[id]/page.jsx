import AboutTour from "./aboutHotel/aboutHotel";
import Filter from "./filte";
import Header from "./header";
import Main from "./main";

export default function Page() {
  return (
    <div className="grid gap-16 px-[5%]">
      <Header />

      <div className="flex gap-6 items-start mb-16">
        <Main />
        <div className="h-full">
          <Filter />
        </div>
      </div>
      <div className="mb-30">
         
         <AboutTour/>
      </div>
    </div>
  );
}
