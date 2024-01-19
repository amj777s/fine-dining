import { FaSpoon } from "react-icons/fa6";
import Image from "next/image";
import contact from '../../../public/images/contactImage.jpg';

export default function ContactInfo(){
    return (
        <div className="w-full flex flex-wrap justify-between items-center">
            <div className="flex flex-col items-center md:items-start w-full md:w-9/20 mb-3 md:mb-0">
                <h3 className="font-bold ">Contact</h3>
                <FaSpoon className="mb-3 " />
                <h2 className="mb-3 text-5xl leading-relaxed text-yellow-400">Find Us</h2>
                <p className="mb-3">1220 SW Foster St, Croweville, ID</p>
                <p className="text-yellow-100">Opening Hours</p>
                <p>Mon - Fri: 10:00 AM - 02:00 AM</p>
                <p>Sat - Sun: 10:00 AM - 03:00 AM</p>
            </div>
            <div className="relative w-full md:w-9/20">
                <Image 
                    src={contact} 
                    alt="cocktail" 
                    sizes="100vw" 
                    className="w-4/5  2xl:w-3/5  h-auto ml-auto mr-auto md:mr-0 z-10 relative p-3" />
                
                {/* Left and Right must be half of remaining width on image */}
                <div className="absolute w-1/2 h-1/2 top-0 left-1/10 md:left-1/5 2xl:left-2/5 bg-yellow-100"></div> 
                <div className="absolute w-1/2 h-1/2 bottom-0 right-1/10 md:right-0 bg-yellow-100"></div>
            </div>
        </div>
    )
}