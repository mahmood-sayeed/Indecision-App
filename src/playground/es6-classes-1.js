
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi i am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;    //two not operators turns true to true and undefined to false.
    }  

    getDescription(){       //overloading parent function
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age, homeLocation);
        this.homeLocation = homeLocation;
    }


    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Student('Mike Mike', 28, 'Computer Science');
console.log(me.getDescription());

const some = new Traveler('Mike Mike', 28, 'Munich');
console.log(some.getGreeting());

const other = new Student();
console.log(other);

// const other = new Person();
// console.log(other.getDescription());