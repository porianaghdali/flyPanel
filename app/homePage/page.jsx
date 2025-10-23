import Image from "next/image";
import HeroSection from "./homePage/heroSection/heroSection";
import ChosenDestinations from "./homePage/chosenDestinations/chosenDestinations";
import SearchSection from "./homePage/searchSection/searchSection";
import PopularTours from "./homePage/popularTours/popularTours";
import InternalTours from "./homePage/internalTours/internalTours";
import RahitoVsOthers from "./homePage/rahitoVsOthers/rahitoVsOthers";
import Blogs from "./homePage/blogs/blogs";
import AboutTour from "./homePage/aboutTour/aboutTour";
import SignUp from "./homePage/signUp/signUp";

export default function Home() {
  return (
    <div className=" px-[5%] ">
      <div className="mb-16">
        <HeroSection />
      </div>
      <div className="flex flex-col gap-32 mb-30">
        <SearchSection />
        <ChosenDestinations />
        <PopularTours />
        <InternalTours />
        <RahitoVsOthers />
        <Blogs />
        <AboutTour/>
        <SignUp/>
      </div>
    </div>
  );
}
