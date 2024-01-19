'use client'
import { LaurelType } from "../types";
import Laurel from "./Laurel";
import { FaSpoon } from "react-icons/fa6";
import { useRef } from "react";
import { useIsVisible } from "../hooks";
import Image from "next/image";
import award from "../../../public/images/awardImage.jpg";

export default function Laurels({
    laurels
}:{
    laurels: LaurelType []
}){ 
    const laurelsRef = useRef(null);
    const isVisible = useIsVisible(laurelsRef);

    const animation = isVisible? 'opacity-100 scale-100': 'opacity-0 scale-50';
    
    return (
        <div ref={laurelsRef} className={`flex flex-wrap items-center justify-between w-full transition duration-1000 ${animation}`}>
            <div className="w-full md:w-9/20">
                <h3 className="font-semibold text-center md:text-left">Awards & Recognition</h3>
                <FaSpoon className="mb-3 ml-auto mr-auto md:ml-0"/>
                <h2 className="text-yellow-400 text-5xl text-center md:text-left mb-3">Our Laurels</h2>
                {laurels.map(laurel => <Laurel key={laurel.name} laurel={laurel}/>)}
            </div>
            <div className="relative w-full md:w-9/20">
                <Image 
                    src={award} 
                    alt="plating of a fancy dish" 
                    sizes="100vw" 
                    priority={true}
                    className="w-4/5 2xl:w-3/5 h-auto ml-auto mr-auto md:mr-0 z-10 relative p-3" />
                
                {/* Left and Right must be half of remaining width on image */}
                <div className="absolute w-1/2 h-1/2 top-0 left-1/10 md:left-1/5 2xl:left-2/5 bg-yellow-100"></div> 
                <div className="absolute w-1/2 h-1/2 bottom-0 right-1/10 md:right-0 bg-yellow-100"></div>
            </div>
        </div>
    )
}