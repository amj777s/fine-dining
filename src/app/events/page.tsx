import EventPanel from "../components/EventPanel";
import NavBar from "../components/NavBar";
import { events } from "../data";

export default function Events(){
    return (
        <div className=" flex flex-col  w-full h-full bg-eventBg  bg-cover bg-bottom  text-lg">
            <div className=" scrollbar w-full h-full p-3 overflow-y-scroll text-center  bg-black/40 ">
                <NavBar />
                <h1 className="text-5xl font-bold text-center mb-16">Events</h1>
                {events.map(ev => <EventPanel key={ev.name + ev.date} event={ev} />)}

            </div>

        </div>
    )
}