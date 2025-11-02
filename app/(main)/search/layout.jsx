import SearchSection from "../homePage/searchSection/searchSection";

export default function SearchLayout({ children }) {
  return (
    <div className="px-[5%]">
      <SearchSection />
      <div className="mt-8">{children}</div>
    </div>
  );
}
