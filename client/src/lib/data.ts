// Menu Item Types
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

// Menu Data
export const burgers: MenuItem[] = [
  {
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with American cheese, lettuce, tomato, and special sauce on a brioche bun.",
    price: "$12.99"
  },
  {
    name: "Bacon Bleu Burger",
    description: "Beef patty topped with crispy bacon, bleu cheese, caramelized onions, and garlic aioli.",
    price: "$14.99"
  },
  {
    name: "Mushroom Swiss Burger",
    description: "Beef patty with sautéed mushrooms, Swiss cheese, and truffle mayo on a toasted bun.",
    price: "$13.99"
  },
  {
    name: "BBQ Burger",
    description: "Beef patty with house BBQ sauce, cheddar cheese, fried onion rings, and coleslaw.",
    price: "$14.99"
  }
];

export const seafood: MenuItem[] = [
  {
    name: "Maine Lobster Roll",
    description: "Fresh Maine lobster meat lightly dressed with mayo on a toasted New England roll.",
    price: "$Market"
  },
  {
    name: "Fried Haddock Basket",
    description: "Crispy beer-battered haddock served with fries, coleslaw, and tartar sauce.",
    price: "$16.99"
  },
  {
    name: "Clam Strips",
    description: "Tender fried clam strips served with house tartar sauce and lemon wedge.",
    price: "$12.99"
  },
  {
    name: "Seafood Chowder",
    description: "Creamy New England-style chowder with haddock, clams, and potatoes.",
    price: "$8.99"
  }
];

export const sandwiches: MenuItem[] = [
  {
    name: "Classic Club",
    description: "Turkey, bacon, lettuce, tomato, and mayo on toasted white bread.",
    price: "$11.99"
  },
  {
    name: "Grilled Chicken",
    description: "Grilled chicken breast with lettuce, tomato, and honey mustard on a ciabatta roll.",
    price: "$12.99"
  },
  {
    name: "BLT",
    description: "Crispy bacon, lettuce, tomato, and mayo on toasted bread of your choice.",
    price: "$9.99"
  },
  {
    name: "Reuben",
    description: "Corned beef, Swiss cheese, sauerkraut, and Russian dressing on grilled rye bread.",
    price: "$13.99"
  }
];

export const sides: MenuItem[] = [
  {
    name: "French Fries",
    description: "Crispy golden fries seasoned with our house blend.",
    price: "$4.99"
  },
  {
    name: "Onion Rings",
    description: "Beer-battered onion rings fried to golden perfection.",
    price: "$5.99"
  },
  {
    name: "Coleslaw",
    description: "House-made creamy coleslaw with a sweet and tangy dressing.",
    price: "$3.99"
  },
  {
    name: "Side Salad",
    description: "Fresh mixed greens with cucumber, tomato, and choice of dressing.",
    price: "$4.99"
  }
];

// Restaurant Information
export const restaurantInfo = {
  name: "Frye House",
  phone: "(207) 203-0152",
  address: "297 Maine Ave, Farmingdale, ME 04344",
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
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.7072683758036!2d-69.8340347!3d44.252827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb204bfb8fc3ee1%3A0x67e5fb2e2a7cfa89!2s297%20Maine%20Ave%2C%20Farmingdale%2C%20ME%2004344!5e0!3m2!1sen!2sus!4v1636735214837!5m2!1sen!2sus"
};
