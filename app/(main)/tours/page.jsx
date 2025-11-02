import Calendar from "./calendar/calendar";
import Filter from "./filter/filte";
import Result from "./result/result";
import Search from "./search/search";






export default function Tours(){
    return(
       <div className="flex flex-col gap-12 px-[5%]">
    <Search/>
    <Calendar/>
    <div className="flex gap-6 items-start">
        <div className="sticky top-4 h-fit">
            <Filter/>
        </div>
        <div className="flex-1"> 
            
            <Result/>
        </div>
    </div>
</div>
    )
}