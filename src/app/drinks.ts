import { Cocktail, Drink } from "./types";

export const drinks: Drink [] = [
    {
        name: "Chapel Hill Shiraz",
        region: "AU",
        serving: "Bottle",
        price: 56
    },
    {
        name: "Catena Malbee",
        region: "AU",
        serving: "Bottle",
        price: 59,
    },
    {
        name: "La Vielle Rose",
        region: "FR",
        serving: "750 Ml",
        price: 44
    },
    {
        name: "Rhino Pale Ale",
        region: "CA",
        serving: "750 Ml",
        price: 31
    },
    {
        name: "Irish Guinmess",
        region: "IE",
        serving: "750 Ml",
        price: 26
    }
];

export const cocktails: Cocktail [] = [
    {
        name: "Aperol Spritz",
        ingredients: ["Aperol", "Villa Marchesi Prosecco", "Soda"],
        price: 20
    },
    {
        name: "Dark 'N Stormy",
        ingredients: ["Dark Rum", "Ginger Beer", "Slice of Lime"],
        price: 16
    },
    {
        name: "Daiquiri",
        ingredients: ["Rum", "Citrus Juice", "Sugar"],
        price: 10
    },
    {
        name: "Old Fashioned",
        ingredients: ["Bourbon", "Brown Sugar", "Angostura Bitters"],
        price: 31
    },
    {
        name: "Negroni",
        ingredients: ["Gin", "Sweet Vermouth", "Campari", "Orange Garnish"],
        price: 26
    }
];