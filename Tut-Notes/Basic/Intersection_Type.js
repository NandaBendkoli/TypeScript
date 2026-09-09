"use strict";
//! Intersection Type
Object.defineProperty(exports, "__esModule", { value: true });
const profile = {
    name: "Nanda",
    salary: 70000,
    city: "Pune",
};
// !  Union type
// id can be string and also an number
let id;
// id can be either a string or a number
id = "hello";
if (typeof id === "string") {
    console.log(id.toUpperCase());
}
