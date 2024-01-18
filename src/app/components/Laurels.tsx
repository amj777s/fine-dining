import { LaurelType } from "../types";
import Laurel from "./Laurel";
import { FaSpoon } from "react-icons/fa6";
import Image from "next/image";
import award from "../../../public/images/awardImage.jpg";

export default function Laurels({
    laurels
}:{
    laurels: LaurelType []
}){
    return (
        <div className="flex flex-wrap items-center justify-between w-full ">
            <div className="w-full md:w-9/20">
                <h3 className="font-semibold">Awards & Recognition</h3>
                <FaSpoon className="mb-3"/>
                <h2 className="text-yellow-400 text-5xl mb-3">Our Laurels</h2>
                {laurels.map(laurel => <Laurel key={laurel.name} laurel={laurel}/>)}
            </div>
            <div className="relative w-full md:w-9/20">
                <Image 
                    src={award} 
                    alt="plating of a fancy dish" 
                    sizes="100vw" 
                    priority={true}
                    className="w-4/5 h-auto ml-auto mr-auto md:mr-0 z-10 relative p-3" />
                
                {/* Left and Right must be half of remaining width on image */}
                <div className="absolute w-1/2 h-1/2 top-0 left-1/10 md:left-1/5 bg-yellow-100"></div> 
                <div className="absolute w-1/2 h-1/2 bottom-0 right-1/10 md:right-0 bg-yellow-100"></div>
            </div>
        </div>
    )
}