'use client'
import { useRef } from "react";
import { useIsVisible } from "../hooks";
import { FaSpoon } from "react-icons/fa6";
import ImagePanel from "./ImagePanel";
import { ImageInfo } from "../types";

export default function Spotlight({
    images
}:{
    images: ImageInfo []
}){
    const spotlightRef = useRef(null);
    const isVisible = useIsVisible(spotlightRef);

    const animation = isVisible? 'opacity-100 scale-100': 'opacity-0 scale-50';
   
    return (
        <div ref={spotlightRef} className={`flex flex-wrap w-full justify-between items-center transition duration-1000 ${animation}`}>
            <div className="flex flex-col w-full mb-3 md:mb-0  md:w-9/20">
                <h3 className="font-semibold text-center md:text-left">Spotlight</h3>
                <FaSpoon className="mb-3 self-center md:self-start" />
                <h2 className="text-yellow-400 text-5xl mb-3 text-center md:text-left">Photo Gallery</h2>
                <p>Checkout our featured award winning dishes that will leave you in a state of bliss.</p>
            </div>
           
            <ImagePanel images={images} />
        </div>
    )
}