"use client"

import {useReducer, useRef } from "react";
import Footer from "../components/Footer";
import Dish from "../components/Dish";
import NavBar from "../components/NavBar";
import { Sides, appetizers, brunch, desserts, dinnerMeats, dinnerSeafood, dinnerSoupsAndSalads, lunchHandhelds, lunchSoupsSalads } from "../data";

export default function Menu() {

    const lunchTitle = useRef<HTMLHeadingElement | null>(null);
    const dinnerTitle = useRef<HTMLHeadingElement | null>(null);
    const brunchTitle = useRef<HTMLHeadingElement | null>(null);
    const dessertTitle = useRef<HTMLHeadingElement | null>(null);


    const handleScrollToMenu = (menu: string) => {
        let node: HTMLHeadingElement | null;
        
        switch (menu) {
            case "Lunch":
                node = lunchTitle.current
                break;
            case "Dinner":
                node = dinnerTitle.current
                break;
            case "Brunch":
                node = brunchTitle.current
                break;
            case "Dessert":
                node = dessertTitle.current
                break;
            
            default:
                node = null

        }
        
        if(node){
            node.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
        
    }
    return (
        <div className=" scrollbar flex flex-col overflow-y-scroll w-full h-full p-3 gap-16 bg-black ">
            <NavBar />
            <div className=" w-full bg-menuBg bg-cover  bg-bottom ">
                <h1 className=" font-semibold text-5xl text-center mb-10">Menu</h1>
                <button className="block m-auto transition-colors mb-3 duration-700 w-1/3 max-w-96  p-2 text-2xl rounded-sm border-4  border-slate-100 hover:border-yellow-400" onClick={()=>handleScrollToMenu("Lunch")}>Lunch</button>
                <button className="block m-auto transition-colors mb-3 duration-700  w-1/3 max-w-96  p-2 text-2xl rounded-sm border-4  border-slate-100 hover:border-yellow-400" onClick={()=>handleScrollToMenu("Dinner")}>Dinner</button>
                <button className="block m-auto transition-colors mb-3 duration-700  w-1/3 max-w-96  p-2 text-2xl rounded-sm border-4  border-slate-100 hover:border-yellow-400" onClick={()=>handleScrollToMenu("Brunch")}>Brunch</button>
                <button className="block m-auto transition-colors mb-3 duration-700  w-1/3 max-w-96  p-2 text-2xl rounded-sm border-4  border-slate-100 hover:border-yellow-400" onClick={()=>handleScrollToMenu("Dessert")}>Dessert</button>
            </div>

            {/*LUNCH*/}
            <div>
                <h2 ref={lunchTitle} className="text-4xl font-bold text-center">Lunch</h2>
                <p className="text-center font-thin text-slate-300">Offered Tuesday-Friday</p>
                <hr className="w-full bg-white h-1" />
                <h3 className="text-xl">Soups & Salads</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5 justify-between">
                    {lunchSoupsSalads.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
                <h3 className="text-xl mt-5">Handhelds</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5  justify-between">
                    {lunchHandhelds.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
            </div>

            {/* Dinner */}
            <div>
                <h2 ref={dinnerTitle} className="text-4xl font-bold text-center">Dinner</h2>
                <p className="text-center font-thin text-slate-300">Offered All Day</p>
                <hr className="w-full bg-white h-1" />
                <h3 className="text-xl">Appetizers</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5  justify-between">
                    {appetizers.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
                <h3 className="text-xl mt-5">Soups & Salads</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5 justify-between">
                    {dinnerSoupsAndSalads.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
                <h3 className="text-xl mt-5">Fin & Fowl</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5  justify-between">
                    {dinnerSeafood.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
                <h3 className="text-xl mt-5">From The Butcher</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5  justify-between">
                    {dinnerMeats.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
                <h3 className="text-xl mt-5">Sides</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5  justify-between">
                    {Sides.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
            </div>

            {/* BRUNCH */}
            <div>
                <h2 ref={brunchTitle} className="text-4xl font-bold text-center">Brunch</h2>
                <p className="text-center font-thin text-slate-300">Offered Saturday & Sunday</p>
                <hr className="w-full bg-white h-1" />
                <h3 className="text-xl">Soups & Salads</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5  justify-between">
                    {lunchSoupsSalads.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
                <h3 className="text-xl mt-5">Brunch Entrees</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5 justify-between">
                    {brunch.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
            </div>

            {/* Dessert */}
            <div>
                <h2 ref={dessertTitle} className="text-4xl font-bold text-center">Dessert</h2>
                <p className="text-center font-thin text-slate-300">Offered All Day</p>
                <hr className="w-full bg-white h-1" />
                <h3 className="text-xl">Everyday Dessert Menu</h3>
                <hr className="w-full bg-white h-1 opacity-45" />
                <div className="w-full flex flex-wrap gap-5  justify-between">
                    {desserts.map(dish => <Dish key={dish.title} dish={dish} />)}
                </div>
            </div>
            <Footer />
        </div>

    )
}