console.log('utils.js');

export const square = (x) => x * x;  //named

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export default subtract;

//export default (a, b) => a - b;

// export { square, add, subtract as default }; //named 2, subtract default

//exports - single default or many named exports