//babel src\playground\es6-arrow-function.js --out-file=public\scripts\app.js --presets=env,react --watch

//es5 function

// const square = function(x) {
//     return x * x;
// };

function square(x) {
    return x * x;
};

//es6 arrow function

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

//test

const fullName = 'John Dave';

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];