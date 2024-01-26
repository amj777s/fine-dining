import { StaticImageData } from "next/image"

export type Drink = {
    name: string,
    region: string,
    serving: string,
    price: number
}

export type Cocktail = {
    name: string,
    ingredients: string [],
    price: number
}

export function isCocktail(drink: Drink | Cocktail): drink is Cocktail {
    return (drink as Cocktail).ingredients !== undefined
}

export type MenuItem = {
    title: string,
    description: string
}

export type LaurelType = {
    name: string,
    year: string [],
    description: string
}

export type ImageInfo = {
    source: StaticImageData,
    name: string
}