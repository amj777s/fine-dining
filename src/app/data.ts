import { Cocktail, Drink, LaurelType } from "./types";

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

export const laurels: LaurelType [] = [
    {
        name: "Michelin Star",
        year: ["2022", "2021"],
        description: "Coveted by many chefs, but bestowed upon only an excellent few. Getting a star (or three) could change the fate of a restaurant."
    },
    {
        name: "James Beard Award",
        year: ["2019"],
        description: "Outstanding Restauran, Rising Star Chef of the Year"
    },
    {
        name: "Bib Gourmand Award",
        year: ["2019"],
        description: "Highlighted restaurants offering good food at moderate prices"
    },
    {
        name: "The World's 50 Best Restaurants",
        year: ["2023"],
        description: "A snapshot of some of the best destinations for unique culinary experiences, in addition to being a barometer for global gastronomic trends."
    }
    
]