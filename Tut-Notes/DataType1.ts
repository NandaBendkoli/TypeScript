let a: number = 10;
console.log(a);
let b: number = 90;
console.log(b);
const a1: number = 90;
console.log(a1);
console.log("Hello ji");
let city = "Pune";

// ! Data Type in Ts -------

//* 1. primitive  Data type
// string number boolean bigint null undefined then symbol

//? 1. String
let name: string = "Nanda";
console.log(name);
//? 2. Number
let age: number = 90;
console.log(age);
let isFalse: boolean = true;
console.log(isFalse);

//* 2. non-primitive data type

// ? Array

let array: number[] = [1, 2];
let arr2: string[] = ["hello ji"];
let mixedArray: (number | string)[] = [1, 2, 3, "Hello ji"];

// ? Tuples
// * Fixed length and a specific type of postion
let tuppleArray: [number, string] = [23, "Neha"];
console.log(tuppleArray);

// ? Enumes
enum orderStatus {
  pending = "PENDING",
  process = "PROCESSING",
  deliverd = "DELIVERED",
}

let status: orderStatus = orderStatus.pending;
let status2: orderStatus = orderStatus.process;
let status3: orderStatus = orderStatus.deliverd;
console.log(status);
console.log(status2);
console.log(status3);

// ? 4 Function

function add(a: number, b: number) {
  return a + b;
}

console.log(add(12, 12));

// ?5 object

// ! Special Data Types------------------------

//? 1. any --> ts dont check the varaibles disbale the checking
// ? evertyhing is allowed here the error will happen at runtime not compile time
let value: any = 12;
value = "smitha";
value = true;

// value.isNotExistMethod();
//* this method is not present this will give an error when you run the DataType.js file
// ! TypeError: value.isNotExistMethod is not a function----- error

// ?2. unknown --> this is safe version of any check is enabled
let value2: unknown = 1234;
// * Assignment is allowed to change but you can not add the any type of mehtod
// * whic is not exist

// value2.notExistMethod(); //? give an here error during the development

// ? 3. void -- this used mainely as return type of function
// * the function does print something but it does not return anything at that time

function print(name: string) {
  console.log(`Hello ${name}`);
}

print("neha");

// ? 4 never the function can never retunr anything

function throwError(msg: string): never {
  throw new Error(msg);
}
// throwError("Error");
//*it doesn not return anything it just throw an error
