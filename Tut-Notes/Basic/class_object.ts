class bottleMaker {
  constructor(
    public name: string,
    public price: number,
    public metal: string,
  ) {}
}

let b1 = new bottleMaker("Bottel", 1200, "plastic");
console.log(b1);

class humanMaker {
  public name;
  public age;
  public gender;
  constructor(name: string, age: number, gender: string) {
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
  constructor(public readonly name: string) {}
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
  constructor(public _name: string) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

let n1 = new setName("Nanda");
console.log(n1.name);
n1.name = "Nandita";
console.log(n1.name);
