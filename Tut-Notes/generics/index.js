"use strict";
function identity(value) {
    return value;
}
const r1 = identity("Hello");
const r2 = identity(12);
const r3 = identity(true);
console.log(r1, r2, r3);
//? here we loose the type safety if we used a any
// ! type of r1 and r2 and r3 not a string number and booleans it is a any
//* use genrics to avoid this thing
function indentify2(value) {
    return value;
}
const r4 = indentify2("smitha");
const r5 = indentify2(12);
// ! ---------------------------------------------------------------------------------------------------------------------------------------
function getFirst(arr) {
    return arr[0];
}
const ans = getFirst([120, 12, 12, 12]);
console.log("ans is ", ans);
// ! -------------------------------Multiple generics
function pair(a, b) {
    return { a, b };
}
const ans2 = pair(12, "tweleve");
console.log(ans2);
const response = {
    data: "api successfully work",
    success: true,
};
console.log(response);
//!--------------------------- geneirics with class
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
}
const box1 = new Box("Helllo");
const box2 = new Box(12);
console.log(box1, box2);
// ! -----------------------------Type Guard
function print(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log("sorry value is number we can perform sting opertion on that");
    }
}
// console.log(print(12));
print("nanda");
// ? 2nd type of type guard--
class Dog {
    bark() {
        console.log("bho bho bho");
    }
}
class Cat {
    meow() {
        console.log("meow meow meow");
    }
}
function speak(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
speak(new Dog());
function check(person) {
    if ("access" in person) {
        console.log("Admin Accesses", person.access);
    }
    else {
        console.log("User Name ", person.name);
    }
}
check({ access: 12 });
