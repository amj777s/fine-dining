'use client'

import { useRef, useState } from "react"
import { ImageInfo } from "../types";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function ImagePanel({
    images
}: {
    images: ImageInfo[]
}) {
    const [index, setIndex] = useState<number>(0);
    const imagesRef = useRef(new Map<number, HTMLImageElement>());

    const dotIndicators = [];
    
    for (let dotIndex = 0; dotIndex < images.length; dotIndex++) {
        
        const dotColor = dotIndex === index? 'bg-yellow-400' :'bg-slate-400';
        const dot = <div key={"dot" + dotIndex} className={`rounded-full w-3 h-3  opacity-50 ${dotColor}`}></div>;
        dotIndicators.push(dot);
        
    };

    const ScrollNextImage = (direction: string) => {

        switch (direction) {
            case "forward":
                if (index === imagesRef.current.size - 1) {
                    break;
                }
                else {
                    const nextNode = imagesRef.current.get(index + 1);
                    nextNode?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                    setIndex(index + 1);
                }
                break;

            case "backward":
                if (index === 0) {
                    break;
                }
                else {
                    const nextNode = imagesRef.current.get(index - 1);
                    nextNode?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                    setIndex(index - 1);
                }
                break;

            default:
                break;
        }
    }




    return (
        <div className=" w-full md:w-9/20">
            <div className="w-full whitespace-nowrap  overflow-hidden">
                {images.map((image, index) => {
                    return (
                        <Image
                            key={image.name}
                            ref={(node) => {

                                if (node) {
                                    imagesRef.current.set(index, node);
                                }
                                else {
                                    imagesRef.current.delete(index);
                                }
                            }}
                            src={image.source}
                            alt="dish"
                            sizes="100vw"
                            className="w-4/5 max-w-96 h-auto ml-1/2 mr-5 -translate-x-1/2 inline-block"
                        />
                    )
                })}
            </div>
            <div className="flex items-center justify-center gap-5 2xl:-mt-5">
                <FaArrowLeft  className="text-4xl opacity-50 whitespace-normal" onClick={() => ScrollNextImage('backward')} />
                {dotIndicators.map(dot => dot)}
                <FaArrowRight className="text-4xl opacity-50" onClick={() => ScrollNextImage('forward')} />   
                </div>
 
        </div>
    )
}