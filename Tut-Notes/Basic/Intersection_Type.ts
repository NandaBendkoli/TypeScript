//! Intersection Type

type A = { name: String };
type B = { age: number };
type c = A & B;

type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Address = {
  city: string;
};

type FullProfile = Person & Employee & Address;

const profile: FullProfile = {
  name: "Nanda",
  salary: 70000,
  city: "Pune",
};

// !  Union type
// id can be string and also an number
let id: string | number;

// id can be either a string or a number
id = "hello";

if (typeof id === "string") {
  console.log(id.toUpperCase());
}
