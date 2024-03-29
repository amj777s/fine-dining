'use client'
import { useRef } from "react";
import { useIsVisible } from "../hooks";
import { FaSpoon } from "react-icons/fa6";
import Link from "next/link";

export default function History() {

    const historyRef = useRef(null);
    const isVisible = useIsVisible(historyRef);

    const animations = isVisible? 'opacity-100 scale-100': 'opacity-0 scale-50';

    return (
        <div ref={historyRef} className={`flex justify-between items-center flex-wrap w-full transition duration-1000 ${animations}`}>
            <div className="flex flex-col text-center md:text-left w-full md:w-1/3 md:h-full mb-6 md:mb-0">
                <h2 className="text-4xl text-yellow-400 md:text-right">About Us</h2>
                <FaSpoon className="mb-3 self-center md:self-end" />
                <p className=" text-lg mb-3">Quality and consistency are key ingredients to the restaurant's success.
                    Regular diners may face a dilemma at the end of their meal when the question
                    is whether to order a favorite dessert, such as Bread Pudding or Louisiana Lust
                    or try a tempting after-dinner beverage from our fine array of choices.</p>
                <Link href='/about' className="transition-colors duration-700 w-1/2 max-w-60 m-auto text-center rounded-sm border-4  border-slate-100 hover:border-yellow-400">Learn More</Link>
            </div>

            <div className=" w-full h-24 md:w-60 md:h-60 md:-rotate-90 bg-knife bg-contain bg-no-repeat bg-center"></div>

            <div className=" flex flex-col text-center md:text-left  w-full md:w-1/3 md:h-full mt-6 md:mt-0 ">
                <h2 className="text-4xl text-yellow-400">Our History</h2>
                <FaSpoon className="mb-3 self-center md:self-start" />
                <p className=" text-lg">Opened in September 2001 with a commitment to bring you the freshest and highest quality seafood in town.
                    We have mouth-watering selections that are featured daily on our extensive menu. We offer daily specials for
                    lunch and dinner as well as select brunch items on Sundays. Our menu includes delicious items that are prepared
                    fresh to order.</p>
            </div>

        </div>
    )
}
