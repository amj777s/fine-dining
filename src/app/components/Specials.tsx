'use client'

import { Cocktail, Drink } from "../types"
import DrinkItem from "./DrinkItem"
import { useRef } from "react"
import { useIsVisible } from "../hooks"

export default function Specials({
    drinks,
    cocktails
}:{
    drinks: Drink []
    cocktails: Cocktail []
}){
    const specialsRef = useRef(null);
    const isVisible = useIsVisible(specialsRef);

    const animation = isVisible? 'opacity-100 scale-100': 'opacity-0 scale-50';

    return (
        <div ref={specialsRef} className={`relative flex flex-wrap w-full items-center justify-between transition duration-1000  ${animation}`}>
            <div className=" absolute  top-0 w-full h-full bg-drink bg-center bg-contain bg-no-repeat"></div>
            <h2 className=" w-full text-center text-4xl text-yellow-400">Today's Specials</h2>
            <div className="w-full md:w-5/12 flex flex-col gap-5">
                <h3 className=" relative z-10 text-center text-xl font-thin">Wine & Beer</h3>
                {drinks.map(drink => <DrinkItem key={drink.name}  drink={drink}/>)}
            </div>
            <div className="w-full md:w-5/12 flex flex-col gap-5">
                <h3 className=" relative z-10 text-center text-xl font-thin">Cocktails</h3>
                {cocktails.map(drink => <DrinkItem key={drink.name} drink={drink} />)}
            </div>

        </div>
    )
}