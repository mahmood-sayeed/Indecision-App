// import './utils.js';
// import subtract, { square, add } from './utils.js';
// //default import can be named anything. subtract can be called "anything"
// console.log('running');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 81));

import isSenior, { isAdult, canDrink } from './person.js';
console.log('can drink ', canDrink(19));
console.log('Adult?  ', isAdult(20));
console.log(isSenior(64));