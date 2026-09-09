function identity(value: any): any {
  return value;
}

const r1 = identity("Hello");
const r2 = identity(12);
const r3 = identity(true);

console.log(r1, r2, r3);

//? here we loose the type safety if we used a any
// ! type of r1 and r2 and r3 not a string number and booleans it is a any

//* use genrics to avoid this thing

function indentify2<T>(value: T): T {
  return value;
}

const r4 = indentify2<string>("smitha");
const r5 = indentify2<number>(12);

// ! ---------------------------------------------------------------------------------------------------------------------------------------

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const ans = getFirst<number>([120, 12, 12, 12]);
console.log("ans is ", ans);

// ! -------------------------------Multiple generics
function pair<T, P>(a: T, b: P) {
  return { a, b };
}

const ans2 = pair(12, "tweleve");
console.log(ans2);

// !-------------------------- generic with api response
interface ApiResponse<T> {
  data: T;
  success: true;
}

const response: ApiResponse<string> = {
  data: "api successfully work",
  success: true,
};

console.log(response);

//!--------------------------- geneirics with class

class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

const box1 = new Box<string>("Helllo");
const box2 = new Box<number>(12);
console.log(box1, box2);

// ! -----------------------------Type Guard
function print(value: String | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
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

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

speak(new Dog());

// 3. in operaotr

type Admin = { access: number };
type User = { name: string };

function check(person: Admin | User) {
  if ("access" in person) {
    console.log("Admin Accesses", person.access);
  } else {
    console.log("User Name ", person.name);
  }
}
check({access:12});

