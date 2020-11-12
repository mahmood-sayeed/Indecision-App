//babel src\playground\es6-arrow-function-2.js --out-file=public\scripts\app.js --presets=env,react --watch

// ---------arguments object - no longer bound with arrow functions in es6---------

// const add = function (a, b) {
//     console.log(arguments);        //in es5, all arguments would get printed. if we pass 3 arguments, first 2 would get added and all 3 would get printed.
//     return a + b;
// };

const add = (a, b) => {
    console.log(arguments);     //Reference error, arguments is not defined
    return a + b;
};
console.log(add(55, 1));


//----------- this keyword - no longer bound in es6-----------

const user = {
    name: 'Michael',
    cities: ['Dubai', 'New York', 'Dublin'],
    printPlacesLived: function () {
        console.log(this.name);     //this keyword bound 
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in ' + city);   //cannot read property 'name' of undefined, type error
            //gets set to undefined
            //anonymous function, this keyword no longer bound cuz no object property
        });
    }
};

//workaround---
// printPlacesLived: function () {
//     const that = this;

//     this.cities.forEach(function (city) {
//         console.log(that.name + ' has lived in ' + city);   
//    });



// with es6 arrow functions, no longer bind their own this value. Instead they use the this value of the context they were created in.

const user = {
    name: 'Michael',
    cities: ['Dubai', 'New York', 'Dublin'],
    printPlacesLived: function () {         //can be written as-- printPlacesLived() {   

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);   
        });
    }
};

user.printPlacesLived();


//works. uses the parent this keyword as the context. parent scope

// lets see map array method instead of foreach array method. 
//map gets called one time for every time in the array just like foreach.
//foreach lets you do something with each item like print to screen
//map transforms each time getting new array back


// const user = {
//     name: 'Michael',
//     cities: ['Dubai', 'New York', 'Dublin'],
//     printPlacesLived() {  
//         const cityMessages = this.cities.map((city) => {
//             return this.name + ' has lived in ' + city;
//         });  
//         return cityMessages;      
        
//     }
// };

//another concise form of above method

const user = {
    name: 'Michael',
    cities: ['Dubai', 'New York', 'Dublin'],
    printPlacesLived() {   
        return this.cities.map((city) => this.name + ' has lived in ' + city);       
    }
};

console.log(user.printPlacesLived());


//test

const multiplier = {
    numbers: [4, 3, 7, 12, 10],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());