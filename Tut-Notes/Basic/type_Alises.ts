console.log("Hello");
type strings = string;

let name: strings = "Neha Awasthi";
console.log(name);

type value = strings | number | boolean;

let a: value = 12;
let b: value = "Smitha";
let c: value = true;
console.log("a is:", a, "b is:", b, "c is:", c);
