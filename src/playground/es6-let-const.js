//babel src\playground\es6-let-const.js --out-file=public\scripts\app.js --presets=env,react --watch

var nameVar = 'Andrew';     //var can be easily overwritten
var nameVar = 'Michael';     //debugging might get difficult
console.log('nameVar', nameVar);    //no error or ambiguity over variable

let nameLet = 'Jen';        //you can reassign
nameLet = 'Julie';          //you cannot redefine starting with let
console.log('nameLet', nameLet);        // if you redefine, it will throw duplicate error unlike var.


const nameConst = 'Jenny';      //you cannot redefine const "duplicate declaration"
console.log('nameConst', nameConst);


function getPetName() {
    var petName = 'Hal';        //function scoped variable
    return petName;
}

getPetName();   //you get the petName value returned
//console.log(petName);       //cannot access petName as it is function scoped.
//var let and const can be function level scoped.

//Block level scoped - let and const                unlike var
// lets try

var fullName = 'Michael Jackson';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    //const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName); //const and let is not accessible here as the scope of it ends with end of if statement.

// above var is accessible everywhere cuz technically function scoped.

let firstName; //parent scope

if (fullName) {
    var firstName = fullName.split(' ')[0]; //child scope
    console.log(firstName); //first log
}
console.log(firstName);     //second log

