import { Cocktail, Drink, isCocktail } from "../types";

export default function DrinkItem({
    drink
}: {
    drink: Cocktail | Drink
}) {

    if (isCocktail(drink)) {
        return (
            <div className="relative z-10">
                <div className="flex items-center">
                    <h3 className=" text-yellow-100">{drink.name}</h3>
                    <hr className=" ml-auto mr-3 bg-slate-100 h-1 w-20" />
                    <h3 className="">{drink.price}</h3>
                </div>
                <p>{drink.ingredients.join(" | ")}</p>
            </div>
        )
    } else {
        return (
            <div className="relative z-10">
                <div className="flex items-center ">
                    <h3 className=" text-yellow-100">{drink.name}</h3>
                    <hr className=" ml-auto mr-3 bg-slate-100 h-1 w-20" />
                    <h3 className="">{drink.price}</h3>
                </div>

                <p>{`${drink.region} | ${drink.serving}`}</p>
            </div>
        )
    }
}