// Classes
class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
    toString() {
        return '(' + this.wheels + ')';
    }
}

class Car extends Vehicle {
    constructor(color) {
        super(4);
        this.color = color;
    }
    toString() {
        return super.toString() + ' colored: ' + this.color;
    }
}

let car = new Car('blue');
car.toString();

console.log(car instanceof Car);
console.log(car instanceof Vehicle);

// Let and Const
function reinitConst() {
    //const me = 1;
    let me = 1;
    console.log(me);
    me = 2;
    console.log(me);
}
reinitConst();

// Var
function iterateVar() {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}
iterateVar(); // outputs 0 - 10

// Let
function iterateLet() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i); // why is there an uncaught reference error?
}
iterateLet(); 
