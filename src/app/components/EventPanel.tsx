import { Event } from "../types";

export default function EventPanel({
    event
}:{
    event: Event
}){
    return (
        <div className="flex flex-col items-center gap-3 font-semibold w-full m-auto ">
            <h2 className="text-2xl font-bold">{event.name}</h2>
            <p className="text-lg">{event.date}</p>
            <p className="text-lg">{event.description}</p>
            <p className="text-lg">{event.time}</p>
            <hr className="w-4/5 bg-white h-1 mt-16 mb-16 " />
        </div>
    )
}