import {LaurelType } from "../types";
import { FaAward } from "react-icons/fa";

export default function Laurel({
    laurel
}:{
    laurel: LaurelType
}){
    return (
        <div className="flex mt-3 mb-3 md:mb-0">
            <FaAward className="text-4xl text-yellow-100 flex-shrink-0" />
            <div>
                <p className=" text-yellow-100">{`${laurel.name} - ${laurel.year.join(',')}`}</p>
                <p className="">{laurel.description}</p>
            </div>
            
        </div>
    )

}