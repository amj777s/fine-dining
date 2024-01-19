'use client'
import { useRef } from "react";
import { useIsVisible } from "../hooks";
import { FaSpoon } from "react-icons/fa6";
import chef from '../../../public/images/chef.jpg';
import Image from "next/image";

export default function ChefsWord(){

    const chefRef = useRef(null);
    const isVisible = useIsVisible(chefRef);

    const animation = isVisible? 'opacity-100 scale-100': 'opacity-0 scale-50';

    return (
        <div ref={chefRef} className={`flex flex-wrap justify-between items-center w-full transition duration-1000 ${animation}`}>
            <div className="flex flex-col w-full md:w-9/20">
                <h3 className="font-semibold text-center md:text-left">Chef's Word</h3>
                <FaSpoon className="mb-3 self-center md:self-start" />
                <h2 className=" mb-3 text-5xl leading-relaxed text-yellow-400">What We Believe In</h2>
                <p className="mb-3 italic first-letter:text-5xl  first-letter:font-bold first-letter:mr-2 first-line:uppercase first-line:tracking-widest">“Mastering one recipe is better than mastering too many. Learn something and own it, 
                and you'll feel so much better about it. You'll have more confidence if you've made it five times, and that confidence 
                adds so much fun to cooking.” </p>
                <p className="mb-3 font-thin">Wolfgang Puck</p>
                <p className="mb-3 md:mb-0 italic">Chef & Founder</p>
            </div>
            
            <div className="relative w-full md:w-9/20">
                <Image 
                    src={chef} 
                    alt="plating of a fancy dish" 
                    sizes="100vw" 
                    className="w-4/5  2xl:w-3/5 h-auto ml-auto mr-auto md:mr-0 z-10 relative p-3" />
                
                {/* Left and Right must be half of remaining width on image */}
                <div className="absolute w-1/2 h-1/2 top-0 left-1/10 md:left-1/5 2xl:left-2/5 bg-yellow-100"></div> 
                <div className="absolute w-1/2 h-1/2 bottom-0 right-1/10 md:right-0 bg-yellow-100"></div>
            </div>

        </div>
    )
}