import { MenuItem } from "../types"

export default function Dish({
    dish
}:{
    dish: MenuItem
}){
    return (
        <div className="w-full lg:w-9/20">
            <h3 className="font-bold">{dish.title}</h3>
            <p className=" text-slate-200 font-thin">{dish.description}</p>
        </div>
    )
}