'use client'
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdOutlineRestaurantMenu } from "react-icons/md";


export default function NavBar() {

    const [optionsHidden, setOptionsView] = useState<boolean>(true);
    <div className="flex gap-3">
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/rewards'>Rewards</Link>
    </div>

    const optionsDisplay = optionsHidden ? 'hidden' : 'block';

    

    const toggleDropMenu = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.preventDefault()
        setOptionsView(!optionsHidden);
    }

    return (
        <nav className="w-full flex  mb-10 items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-widest">GERICHT</h2>
            <div className="hidden sm:flex gap-3">
                <Link href='/' className=" transition-colors duration-500 hover:text-yellow-400">Home</Link>
                <Link href='/about' className=" transition-colors duration-500 hover:text-yellow-400">About</Link>
                <Link href='/menu' className=" transition-colors duration-500 hover:text-yellow-400">Menu</Link>
                <Link href='/rewards' className=" transition-colors duration-500 hover:text-yellow-400">Rewards</Link>
            </div>
            <MdMenu className=" sm:hidden text-4xl" onClick={toggleDropMenu} />
            <div className={`${optionsDisplay} text-4xl z-50 fixed w-full h-full top-0 left-0 bg-black`}>
                <MdOutlineRestaurantMenu className=" float-right mt-2 mr-2" onClick={toggleDropMenu} />
                <Link className="block ml-2 mt-2 mb-2" href='/'>Home</Link>
                <Link className="block ml-2 mb-2" href='/about'>About</Link>
                <Link className="block ml-2 mb-2" href='/menu'>Menu</Link>
                <Link className="block ml-2 mb-2" href='/rewards'>Rewards</Link>
            </div>
        </nav>
    )
}