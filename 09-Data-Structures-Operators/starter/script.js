'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainindex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainindex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`ordered pasta with ingredients ${ing1}, ${ing2} and ${ing3}`);
  },
};

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const [starterItem, mainItem] = restaurant.order(2, 1);
// console.log(starterItem, mainItem);

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const { name: restaurantName, openingHours: openingHourDetails } = restaurant;
console.log(restaurantName, openingHourDetails);

const { menu: menuList = [], starterMenu: starterList = [] } = restaurant;
console.log(menuList, starterList);

// use '()' to wrap when need to mutate a, b instead of creating new variables.
let a = 111;
let b = 222;
const obj = { a: 23, b: 33 };
({ a, b } = obj);

const {
  openingHours: {
    fri: { open: o, close: c },
  },
} = restaurant;
console.log(o, c);

const str = 'manoj';
const letters = [...str, '', 'dd'];
console.log(letters);

// const ingredients = [
//   prompt('ingredient 1?'),
//   prompt('ingredient 2?'),
//   prompt('ingredient 3?'),
//   prompt('ingredient 4?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'pppppppp';
console.log(restaurant);
console.log(restaurantCopy);

//rest pattern
const colors = ['red', 'green', 'yellow', 'black', 'beige'];

const [primary, seconday, ...others] = colors;
console.log(primary, seconday, others);
