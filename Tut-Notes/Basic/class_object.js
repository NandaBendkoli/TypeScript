"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bottleMaker {
    name;
    price;
    metal;
    constructor(name, price, metal) {
        this.name = name;
        this.price = price;
        this.metal = metal;
    }
}
let b1 = new bottleMaker("Bottel", 1200, "plastic");
console.log(b1);
class humanMaker {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let h1 = new humanMaker("Durva", 12, "female");
console.log(h1);
//! public private and protector
//* public accesses anywhere in code
//* protect accesses only inside the class
// ! readonly
class dontChangeName {
    name;
    constructor(name) {
        this.name = name;
    }
    chnageName() {
        // this.name = "new name"; //! this will give an error u can change the value of name now
    }
}
const c1 = new dontChangeName("Hello");
console.log(c1);
c1.chnageName();
console.log(c1);
// here we accidently changed the number
// so we used a redonly properties for that
//! getter and setter
class setName {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let n1 = new setName("Nanda");
console.log(n1.name);
n1.name = "Nandita";
console.log(n1.name);
