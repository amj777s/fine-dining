
import { FaSpoon } from "react-icons/fa6";
import Image from "next/image";
import dish from '../../../public/images/jumbotronPic.jpg';

export default function Jumbotron() {
    return (
        <div className="flex flex-wrap -mt-96 justify-between items-center w-full">
            <div className="flex flex-col w-full md:w-9/20">
                <p className="font-semibold">Chase The New Flavor</p>
                <FaSpoon className="mb-3" />
                <h2 className=" mb-3 text-5xl leading-relaxed text-yellow-400">THE KEY TO FINE DINING</h2>
                <p className="mb-3 italic first-letter:text-5xl first-line:uppercase">"Fine dining is an experience, an art form. It's not just about eating; 
                it's about the ambiance, the service, and the entire sensory journey. 
                When done right, it's a celebration of food and life itself."</p>
                <button  className="transition-colors duration-700 w-1/2 max-w-60 m-auto mb-3 rounded-sm border-4  border-slate-100 hover:border-yellow-400">Explore Menu</button>
            </div>
            
            <div className="relative w-full md:w-9/20">
                <Image 
                    src={dish} 
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
