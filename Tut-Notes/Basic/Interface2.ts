interface User {
  name: string;
  age: number;
}
const user1: User = {
  name: "Nanda",
  age: 26,
};

console.log(user1);

//! creating the nested obj strcture--
interface Address {
  city: string;
  state: string;
}

interface User2 {
  name: string;
  age: number;
  address: Address;
}

const user2: User2 = {
  name: "Neha",
  age: 26,
  address: {
    city: "Nashik",
    state: "Maharashtra",
  },
};

console.log(user2);

// ! Extending the interface --> Inheritance

interface person {
  name: string;
  age: number;
}

interface Employee extends person {
  employeeId: number;
}

const emp1: Employee = {
  name: "Siya",
  age: 45,
  employeeId: 1,
};

console.log(emp1)