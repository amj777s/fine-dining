import { FaSpoon } from "react-icons/fa6";
import ImagePanel from "./ImagePanel";
import { ImageInfo } from "../types";

export default function Spotlight({
    images
}:{
    images: ImageInfo []
}){
    return (
        <div className="flex flex-wrap w-full justify-between items-center">
            <div className="w-full mb-3 md:mb-0  md:w-9/20">
                <h3 className="font-semibold">Spotlight</h3>
                <FaSpoon className="mb-3" />
                <h2 className="text-yellow-400 text-5xl mb-3">Photo Gallery</h2>
                <p>Checkout our featured award winning dishes that will leave you in a state of bliss.</p>
            </div>
           
            <ImagePanel images={images} />
        </div>
    )
}