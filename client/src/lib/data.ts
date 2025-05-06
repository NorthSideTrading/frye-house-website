// Types
import { MenuItem, Testimonial } from './types';

// Menu Data
export const dinnerBaskets: MenuItem[] = [
  {
    name: "Chicken Dinner Basket",
    description: "Includes: Fries, Roll & Coleslaw",
    price: "$13.50"
  },
  {
    name: "Haddock Dinner Basket",
    description: "Includes: Fries, Roll & Coleslaw",
    price: "$14.95"
  },
  {
    name: "Scallops Dinner Basket",
    description: "Includes: Fries, Roll & Coleslaw",
    price: "$19.50"
  },
  {
    name: "Shrimp Dinner Basket",
    description: "Includes: Fries, Roll & Coleslaw",
    price: "$19.50"
  },
  {
    name: "Clam Dinner Basket",
    description: "Includes: Fries, Roll & Coleslaw",
    price: "$21.95"
  },
  {
    name: "Mixed Sea Dinner Basket",
    description: "Haddock, shrimp, clams & scallops. Includes: Fries, Roll & Coleslaw",
    price: "$21.95"
  },
  {
    name: "Pork Tenderloin Dinner Basket",
    description: "Includes: Fries, Roll & Coleslaw",
    price: "$13.50"
  }
];

export const snacks: MenuItem[] = [
  {
    name: "Chicken Snack",
    description: "With Fries",
    price: "$9.95"
  },
  {
    name: "Haddock Snack",
    description: "With Fries",
    price: "$11.95"
  },
  {
    name: "Scallops Snack",
    description: "With Fries",
    price: "$16.50"
  },
  {
    name: "Shrimp Snack",
    description: "With Fries",
    price: "$13.95"
  },
  {
    name: "Clams Snack",
    description: "With Fries",
    price: "$17.50"
  },
  {
    name: "Mixed Sea Snack",
    description: "Haddock, shrimp, clams & scallops. With Fries",
    price: "$16.95"
  },
  {
    name: "Pork Snack",
    description: "With Fries",
    price: "$9.95"
  }
];

export const pints: MenuItem[] = [
  {
    name: "Chicken Pint",
    description: "Fresh fried chicken by the pint",
    price: "$12.95"
  },
  {
    name: "Haddock Pint",
    description: "Fresh fried haddock by the pint",
    price: "$14.50"
  },
  {
    name: "Scallops Pint",
    description: "Fresh fried scallops by the pint",
    price: "$19.50"
  },
  {
    name: "Shrimp Pint",
    description: "Fresh fried shrimp by the pint",
    price: "$16.50"
  },
  {
    name: "Clam Pint",
    description: "Fresh fried clams by the pint",
    price: "$20.95"
  },
  {
    name: "Mixed Sea Pint",
    description: "Haddock, shrimp, clams & scallops by the pint",
    price: "$18.95"
  },
  {
    name: "Pork Tenderloin Pint",
    description: "Fresh fried pork tenderloin by the pint",
    price: "$12.95"
  }
];

export const specialties: MenuItem[] = [
  {
    name: "Family Meal",
    description: "Includes: 2 Pints of Chicken, Fries, coleslaw, dinner rolls, and 2 Liter of Soda. Feeds Four",
    price: "$26.95"
  },
  {
    name: "Wings",
    description: "Blazin Hot, Mild, BBQ, Teriyaki, Sweet Thai Chili, Nashville, or Salt & Vinegar. Served with Celery & Carrots, Blue Cheese or Ranch",
    price: "$10.99"
  },
  {
    name: "1/4 lb Lobster Roll",
    description: "Fresh Maine lobster on a toasted roll",
    price: "$16.95"
  },
  {
    name: "1/2 lb Lobster Roll",
    description: "Double-sized fresh Maine lobster on a toasted roll",
    price: "$29.95"
  }
];

export const soups: MenuItem[] = [
  {
    name: "Seafood Stew Cup",
    description: "Our signature seafood stew in a cup",
    price: "$7.95"
  },
  {
    name: "Seafood Stew Bowl",
    description: "Our signature seafood stew in a bowl",
    price: "$11.50"
  },
  {
    name: "Seafood Stew Quart",
    description: "Our signature seafood stew in a quart container",
    price: "$22.95"
  },
  {
    name: "Soup of the Day Cup",
    description: "Ask about our daily soup special",
    price: "$3.95"
  },
  {
    name: "Soup of the Day Bowl",
    description: "Ask about our daily soup special",
    price: "$5.50"
  }
];

export const sandwiches: MenuItem[] = [
  {
    name: "Hamburger Single",
    description: "Classic hamburger, add toppings as desired",
    price: "$4.95"
  },
  {
    name: "Cheeseburger Single",
    description: "Classic cheeseburger, add toppings as desired",
    price: "$5.50"
  },
  {
    name: "Fried or Grilled Haddock",
    description: "Fresh haddock filet, prepared fried or grilled to your preference",
    price: "$8.95"
  },
  {
    name: "House Fried Chicken",
    description: "Our signature fried chicken on a bun",
    price: "$7.95"
  },
  {
    name: "Fried or Grilled Chicken Breast",
    description: "Chicken breast, prepared fried or grilled to your preference",
    price: "$8.50"
  },
  {
    name: "B.L.T.",
    description: "Classic bacon, lettuce, and tomato sandwich",
    price: "$7.95"
  },
  {
    name: "Hot Dog",
    description: "Classic all-beef hot dog",
    price: "$2.95"
  },
  {
    name: "Grilled Cheese",
    description: "Melted American cheese on grilled bread",
    price: "$3.95"
  },
  {
    name: "Philly Cheese Steak",
    description: "Thinly sliced steak with melted cheese and grilled peppers and onions",
    price: "$10.95"
  },
  {
    name: "Clam Roll",
    description: "Fried clams on a toasted roll",
    price: "$9.50"
  },
  {
    name: "Shrimp Roll",
    description: "Fried shrimp on a toasted roll",
    price: "$8.95"
  },
  {
    name: "Chicken Parmesan",
    description: "Fried chicken topped with marinara and melted cheese",
    price: "$8.50"
  },
  {
    name: "BBQ Pulled Pork",
    description: "Slow-cooked pulled pork with BBQ sauce on a bun",
    price: "$7.95"
  }
];

export const sides: MenuItem[] = [
  {
    name: "Onion Rings Small",
    description: "Golden fried onion rings",
    price: "$3.25"
  },
  {
    name: "Onion Rings Large",
    description: "Golden fried onion rings",
    price: "$5.95"
  },
  {
    name: "French Fries Small",
    description: "Crispy golden fries",
    price: "$3.50"
  },
  {
    name: "French Fries Large",
    description: "Crispy golden fries",
    price: "$5.50"
  },
  {
    name: "Mushrooms Small",
    description: "Battered and fried mushrooms",
    price: "$4.25"
  },
  {
    name: "Mushrooms Large",
    description: "Battered and fried mushrooms",
    price: "$6.95"
  },
  {
    name: "Veggie Plate Small",
    description: "Assorted fried vegetables",
    price: "$4.95"
  },
  {
    name: "Veggie Plate Large",
    description: "Assorted fried vegetables",
    price: "$7.95"
  },
  {
    name: "Mozzarella Sticks",
    description: "Breaded and fried mozzarella cheese sticks",
    price: "$7.50"
  },
  {
    name: "Fried Pickles",
    description: "Battered and fried dill pickle spears",
    price: "$5.50"
  },
  {
    name: "Coleslaw Small",
    description: "House-made creamy coleslaw",
    price: "$0.75"
  },
  {
    name: "Coleslaw Medium",
    description: "House-made creamy coleslaw",
    price: "$1.95"
  },
  {
    name: "Coleslaw Large",
    description: "House-made creamy coleslaw",
    price: "$2.95"
  },
  {
    name: "Gravy",
    description: "House gravy for dipping",
    price: "$0.95"
  }
];

export const drinks: MenuItem[] = [
  {
    name: "Soft Drink Small",
    description: "Pepsi, Diet Pepsi, Ginger Ale, Mt. Dew, Brisk Tea, Pink Lemonade",
    price: "$1.95"
  },
  {
    name: "Soft Drink Large",
    description: "Pepsi, Diet Pepsi, Ginger Ale, Mt. Dew, Brisk Tea, Pink Lemonade",
    price: "$2.95"
  },
  {
    name: "Coffee/Tea",
    description: "Hot coffee or tea",
    price: "varies"
  },
  {
    name: "Bottled Drinks",
    description: "Various bottled beverages",
    price: "varies"
  },
  {
    name: "Milkshake",
    description: "Vanilla, Chocolate, Coffee, Peanut Butter, Blackberry, Banana, or Strawberry",
    price: "$3.95"
  }
];

// Restaurant Information
export const restaurantInfo = {
  name: "Frye House",
  phone: "(207) 203-0152",
  address: "557 Maine Ave, Farmingdale, ME 04344",
  hours: {
    monday: "11:00 AM - 8:00 PM",
    tuesday: "11:00 AM - 8:00 PM",
    wednesday: "11:00 AM - 8:00 PM",
    thursday: "11:00 AM - 8:00 PM",
    friday: "11:00 AM - 9:00 PM",
    saturday: "11:00 AM - 9:00 PM",
    sunday: "12:00 PM - 7:00 PM"
  },
  facebookUrl: "https://m.facebook.com/100044722821803/",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.1435690613186!2d-69.8304145!3d44.264724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb205002d5aaaab%3A0x1269c4825c03b544!2s557%20Maine%20Ave%2C%20Farmingdale%2C%20ME%2004344!5e0!3m2!1sen!2sus!4v1620765214837!5m2!1sen!2sus"
};

// Customer Testimonials - Real reviews from Google
export const testimonials: Testimonial[] = [
  {
    name: "Arica Murphy",
    rating: 5,
    date: "May 2024",
    text: "Best seafood and great burgers. Great service too."
  },
  {
    name: "Rebekkah C",
    rating: 5,
    date: "April 2024",
    text: "This place may be unassuming from the outside, but the food was AMAZING! We had haddock, onion rings, and fried clams. The portions were generous for the price and the food was excellent. Crispy breading and fresh fish. If we're ever in the area, we are definitely coming back."
  },
  {
    name: "Debbie Trask",
    rating: 5,
    date: "March 2024",
    text: "I've had the clam basket before and was delicious. Today I stopped and had a Lobster Roll. I've had many, but this is one of the best I've had. Soft and buttery toasted roll, large chunks of lobster. Didn't need to be swimming in mayo, because it wasn't dry at all. Great job!"
  },
  {
    name: "Celina Curtis",
    rating: 5,
    date: "February 2024",
    text: "Omgosh, they are one of the best places to eat. So good. Clean, great prices for the quality of food you get. I can't say enough. We make it a point to go there often, and every time it's consistent!!! TRY IT!!"
  },
  {
    name: "Dave",
    rating: 5,
    date: "January 2024",
    text: "Great food, fantastic service. The food is made fresh and is delicious, you can't go wrong with anything on the menu. Friendly staff and great atmosphere."
  },
  {
    name: "Alyssa Chretien",
    rating: 5,
    date: "December 2023",
    text: "Great food, great prices! Will definitely be back!"
  }
];
