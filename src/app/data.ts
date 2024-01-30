import { Cocktail, Drink, ImageInfo, LaurelType, MenuItem, Event } from "./types";

import apricotSoup from '../../public/images/apricotSoup.jpg';
import beefWellington from '../../public/images/beefWellington.jpg';
import chickenSalad from '../../public/images/chickenSalad.jpg';
import goldenPotato from '../../public/images/goldenPotato.jpg';
import salmonRice from '../../public/images/salmonRice.jpg';
import scallop from '../../public/images/scallop.jpg';
import steak from '../../public/images/steakAndBroc.jpg';

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

export const images: ImageInfo [] = [
    {
        name: "Apricot Soup",
        source: apricotSoup
    },
    {
        name: "Beef Wellington",
        source: beefWellington
    },
    {
        name: "Chicken Salad",
        source: chickenSalad
    },
    {
        name: "Golden Potato",
        source: goldenPotato
    },
    {
        name: "Salmon with Rice",
        source: salmonRice
    },
    {
        name: "Scallops",
        source: scallop
    },
    {
        name: "Steak and Broccolli",
        source: steak
    } 
]

export const lunchSoupsSalads: MenuItem [] = [
    {
        title: "Warm Duck Salad",
        description: "Grilled duck medallions, spiced pecans, bleu cheese crumbles, dried cranberries, spinach, rosemary raspberry vinaigrette"
    },
    {
        title: "Sensation Athens Salad",
        description: "Fresh greens, roasted sweet peppers, kalamata olives, tomatoes, feta cheese, sensation dressing"
    },
    {
        title: "Steakhouse Combo",
        description: "Chargrilled 8 oz. barrel cut filet mignon, served with our signature 'BLT' bleu cheese lettuce wedge"
    },
    {
        title: "Turkey Cobb Salad",
        description: "Shaved turkey, applewood smoked bacon, avocado, mixed greens, tomatoes, cheddar & bleu cheeses, choice of dressing"
    },
    {
        title: "Ahi Tuna Salad",
        description: "Sesame crusted & seared rare, mixed greens & spinach, seaweed salad, cucumber, wasabi-cilantro dressing"
    }
];

export const lunchHandhelds: MenuItem [] = [
    {
        title: "The Spanish Town Cuban",
        description: "Smoked Spanish paprika & chilli roasted pork, ham, pickles, Swiss, roasted garlic-dijonaise on pressed on French loaf"
    },
    {
        title: "Boulevard Burger",
        description: "Twin patties of brisket & chuck blend, brioche bun, lettuce, tomato, and pickles on side. Add cheese and/or bacon. Choice of steak fries or sweet potato fries with any sandwich"
    },
    {
        title: "Audubon Turkey Club",
        description: "Sliced turkey, Swiss, lettuce, tomato, apple smoked bacon, avocado crema on wheat"
    }
]

export const appetizers: MenuItem [] = [
    {
        title: "Oysters On the Half Shell",
        description: "Served iced cold!"
    },
    {
        title: "Crab Cakes Covington",
        description: "Fried crab cakes topped with remoulade, crabmeat, tomato & corn relish"
    },
    {
        title: "Zydeco Mushrooms",
        description: "Seafood stuffed and baked mushroom caps with parmesan cheese and lemon butter"
    },
    {
        title: "Bayou Bleus Asparagus Spears",
        description: "Lightly fried, bleu cheese dipping sauce"
    },
    {
        title: "Ahi Tuna",
        description: "Sesame crusted and seared rare, set with wakame seaweed salad and garnished with wasabi and soy syrup"
    },
    {
        title: "Cajun Arancini",
        description: "Cracklin crusted boudin, set with mirliton slaw, citrus horseradish aioli & tabasco honey"
    },
    {
        title: "Eggplant Camellia",
        description: "Lightly fried medallions, jumbo lump crabmeat, dill hollandaise"
    },
    {
        title: "Acadiana Egg-rolls",
        description: "Three shrimp & duck egg-rolls served in sweet & sour sauce with Asian mustard"
    },
    {
        title: "Colossal Shrimp Cocktail",
        description: "Jumbo Gulf shrimp with spicy cocktail sauce"
    }
];

export const dinnerSoupsAndSalads: MenuItem[] = [
    {
        title: "Sensation Salad",
        description: "Iceberg lettuce, grape tomatoes, kalamata olives, & toasted almonds sensation dressing"
    },
    {
        title: "Marinated Seafood Salad",
        description: "Jumbo lump crabmeat, shrimp, celery & tomatoes, mixed greens"
    },
    {
        title: "Warm Crawfish",
        description: "Fried tails, fresh spinach, crisp bacon, honey mustard dressing"
    },
    {
        title: "House Salad",
        description: "Mixed greens, red onions, tomatoes, croutons with choice of dressing"
    },
    {
        title: "Caesar Salad",
        description: "Romaine lettuce tossed with a classic Parmesan dressing, fresh croutons"
    },
    {
        title: "Napa Salad",
        description: "Spinach, grapes, apples, spiced pecans, bleu cheese, pinot noir dressing. Add Marinated Chicken or Jumbo Gulf Shrimp"
    }
];
export const dinnerSeafood: MenuItem [] = [
    {
        title: "Cedar-Roasted Redfish",
        description: "Plank-roasted fillet with creole lemon caper butter. Add Jumbo Lump Crabmeat, Jumbo Sautéed Shrimp, or Fried Oysters"
    },
    {
        title: "Ultimate Alfredeaux",
        description: "Gulf shrimp, lump crabmeat & crawfish tossed in Romano cream"
    },
    {
        title: "Fresh 'Visiting' Fish",
        description: "Pan seared selections, beurre blanc finish. Add A'la Orleans - traditional New Orleans BBQ Shrimp or A'la Cocodrie - lump crabmeat, Crimini mushrooms and scallions"
    },
    {
        title: "Shrimp & Grits",
        description: "Jumbo shrimp with Abita Amber & andouille cream sauce"
    },
    {
        title: "Pasta Chandel",
        description: "Linguine pasta tossed with Mediterranean vegetables, finished with pesto & crumbled feta"
    },
    {
        title: "Shrimp Vacherie",
        description: "Two seafood stuffed gulf shrimp fried and served with creolaise"
    }
];

export const dinnerMeats: MenuItem [] = [
    {
        title: "Veal Oscar",
        description: "Panéed trio medallions, jumbo lump crabmeat & asparagus, sauce béarnaise "
    },
    {
        title: 'Duck Mansur',
        description: "Roasted boneless duckling topped with a Chambord blackberry sauce"
    },
    {
        title: "Steak & East Coast Lobster",
        description: "Petite- 8 oz. filet & 5 oz. lobster tail   Grand- 8 oz. filet & two 5 oz. tails"
    },
    {
        title: "Creole Chicken Piccata",
        description: "Panéed breast, Crimini mushrooms, capers & lemon butter sauce"
    },
    {
        title: "8 OZ. Filet Mignon",
        description: "Seasoned & char grilled to perfection, a classic delight"
    }
]

export const Sides: MenuItem [] = [
    {
        title: "Pepper Jack Spinach Madeline",
        description: ""
    },
    {
        title: "Stone Ground Grits",
        description:""
    },
    {
        title: "Asparagus w/ Hollandaise",
        description: ""
    },
    {
        title: "Sauteed Crimini Mushrooms",
        description: ""
    },
    {
        title: "Parmesan Risotto",
        description: ""
    },
    {
        title: "Steak House or Sweet Potato Fries",
        description: ""
    },
    {
        title: "Sauteed Broccoli",
        description: ""
    },
    {
        title: "Smoked Gouda Mac & Cheese",
        description:""
    }
];

export const brunch: MenuItem[] = [
    {
        title: "Eggs Benedict",
        description: "Poached eggs, Canadian bacon, English muffin, hollandaise, & roasted tomato marmalade.  Choice of fruit or grits"
    },
    {
        title: "Eggs Florentine",
        description: "English muffin topped with poached eggs and creamed spinach, finished with hollandaise sauce.  Choice of fruit or grits"
    },
    {
        title: "Ultimate Omelette",
        description: "Lump crabmeat, shrimp, crawfish, & pepper jack mornay. Choice of fruit or grits"
    },
    {
        title: "Brunch Cheeseburger",
        description: "Twin patties of brisket & chuck blend on brioche bun, topped with fried egg, applewood smoked bacon, cheddar.  Lettuce, tomato, pickle on side. Served with steak house fries"
    },
    {
        title: "Eggs Royale",
        description: "English muffin topped with poached eggs and filet medallions, finished with Bearnaise sauce.  Choice of fruit or grits"
    },
    {
        title: "Boulevard Brunch",
        description: "Poached eggs set on crab cakes & English muffins, Remoulade.  Choice of fruit or grits"
    },
    {
        title: "Grits & Grillades",
        description: "Sautéed medallions over stone ground grits, topped with peppercorn pan gravy"
    }
];

export const desserts: MenuItem[] = [
    {
        title: "Try our 'Bean Me Up' martini following dinner!",
        description: "Made with fresh brewed & chilled espresso!"
    },
    {
        title: "Bread Pudding",
        description: "Baked with fresh blueberries, raisins, and Grand Marnier caramel"
    },
    {
        title: "Bailey's Cheesecake Chantilly",
        description: "Chocolate chips & Irish cream chantilly sauce"
    },
    {
        title: "Mocha Chocolate Cake",
        description: "Coffee infused chocolate cake with hazelnut chocolate drizzle.  Served with a petite scoop of vanilla ice cream."
    },
    {
        title: "Seasonal Berries Anglaise",
        description: "Fresh berries laced with English cream"
    },
    {
        title: "Mixed Berry Cheesecake",
        description: "Raspberry sauce & macerated berries"
    },
    {
        title: "Turtle Cheesecake",
        description: "Chocolate chip, caramel, & spiced candied pecans"
    }
];

export const events: Event [] = [
    {
        name: 'KIRK HOLDER',
        date: "Wednesday January 31st",
        description: "Live music on the patio!",
        time: "06:30 PM - 09:30 PM"
    },
    {
        name: 'MIKE HOGAN',
        date: "Thursday February 1st",
        description: "Live music on the patio!",
        time: "06:30 PM - 09:30 PM"
    },
    {
        name: 'CYNDER ROAD DUO',
        date: "Friday February 2nd",
        description: "Live music on the patio!",
        time: "07:00 PM - 10:00 PM"
    },
    {
        name: 'DAMON KIN & BO JAMISON',
        date: "Saturday February 3rd",
        description: "Live music on the patio!",
        time: "07:00 PM - 10:00 PM"
    },
    {
        name: 'HEATH RANSONNET',
        date: "Thursday February 8th",
        description: "Live music on the patio!",
        time: "06:30 PM - 09:30 PM"
    },
    {
        name: 'CHRIS OCMAND',
        date: "Thursday February 8th",
        description: "Standup special on the patio!",
        time: "06:30 PM - 09:30 PM"
    },
    {
        name: 'CHRIS LEBLANC',
        date: "Thursday February 8th",
        description: "Live music on the patio!",
        time: "07:00 PM - 10:00 PM"
    },
    {
        name: 'CHRIS ALLEN',
        date: "Thursday February 22nd",
        description: "Live music on the patio!",
        time: "06:30 PM - 09:30 PM"
    },
    {
        name: 'PRESS "1" TRIO',
        date: "Friday February 23rd",
        description: "Standup special on the patio!",
        time: "07:00 PM - 10:00 PM"
    },
    {
        name: 'IAN & JARRETT',
        date: "Friday February 23rd",
        description: "Live music on the patio!",
        time: "06:30 PM - 09:30 PM"
    }
];