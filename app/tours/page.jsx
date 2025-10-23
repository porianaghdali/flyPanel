import Calendar from "./calendar/calendar";
import Filter from "./filter/filte";
import Result from "./result/result";
import Search from "./search/search";






export default function Tours(){
    return(
        <div className="flex flex-col gap-12">
            <Search/>
            <Calendar/>
            <div className="flex gap-6">
                <Filter/>
                <Result/>
            </div>
        </div>
    )
}