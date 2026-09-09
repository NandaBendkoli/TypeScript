// // ! 1 ..Key of operators

// // type User = {
// //   name: "Nanda";
// //   age: 12;
// // };

// // type keys = keyof User;
// // // ? become ---> keys = "name"| "age";

// // let key: keys;
// // key = "age";
// // key = "name";
// // // key ="email"; //* gives an error
// // console.log(key);

// // !______________________________________________________________________________________________________________________________________________________

// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// function getKeys(obj: User, key: keyof User) {
//   return obj[key];
// }

// const u1: User = {
//   name: "neha",
//   age: 12,
//   email: "123@gmail.com",
// };

// console.log(getKeys(u1, "email"));

// // !  index signature
// //? means i dont know the properties of object but i kno the type of that properties kesy and values

// const marks = {
//   mar: 90,
//   hin: 89,
//   eng: 89,
// };
// // ? here i know the properties all mar hin anf eng
// // * tommorow new sub can come history:78
// // ? we dont know all sub names beforhand

// // ! we can use index signature

// type Marks = {
//   [key: string]: number;
// };

// const studentMarks: Marks = {
//   math: 89,
//   hin: 99,
//   eng: 89,
// };

// //? letter u can do this also
// studentMarks.history = 99;

// console.log(studentMarks);

// !----------
// ============================================================
//                    TYPESCRIPT UTILITY TYPES
// ============================================================

//! Utility Types are built-in TypeScript types that help us
// !transform, modify, or reuse existing types.
//! They help us avoid repeating the same type definitions.

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age?: number;
  createdAt: Date;
}

//! 1. PARTIAL<T>
// Partial<T> makes ALL properties optional.

type PartialUser = Partial<User>;

/*
Result:

{
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  age?: number;
  createdAt?: Date;
}
*/

const updateUser: PartialUser = {
  name: "Nanda",
};

// Real-world use case:
// PATCH /users/:id
// User may want to update only one or two fields.

// ============================================================
// 2. REQUIRED<T>
// ============================================================

// Required<T> makes ALL properties required.

type RequiredUser = Required<User>;

/*
Result:

{
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;        // previously optional, now required
  createdAt: Date;
}
*/

const requiredUser: RequiredUser = {
  id: 1,
  name: "Nanda",
  email: "nanda@gmail.com",
  password: "123456",
  age: 22,
  createdAt: new Date(),
};

// ============================================================
// 3. READONLY<T>
// ============================================================

// Readonly<T> makes ALL properties readonly.

// Once created, properties cannot be modified.

type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "Nanda",
  email: "nanda@gmail.com",
  password: "123456",
  createdAt: new Date(),
};

// readonlyUser.name = "John"; // ERROR
// Cannot assign to 'name' because it is a read-only property.

// ============================================================
// 4. PICK<T, K>
// ============================================================

// Pick<T, K> selects specific properties from a type.

// Syntax:

// Pick<Type, "property1" | "property2">

type UserPreview = Pick<User, "id" | "name" | "email">;

/*
Result:

{
  id: number;
  name: string;
  email: string;
}
*/

const userPreview: UserPreview = {
  id: 1,
  name: "Nanda",
  email: "nanda@gmail.com",
};

// Real-world use case:
// Send only required user information to frontend.

// ============================================================
// 5. OMIT<T, K>
// ============================================================

// Omit<T, K> removes specific properties from a type.

// Syntax:

// Omit<Type, "property1" | "property2">

type PublicUser = Omit<User, "password">;

/*
Result:

{
  id: number;
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
}
*/

const publicUser: PublicUser = {
  id: 1,
  name: "Nanda",
  email: "nanda@gmail.com",
  createdAt: new Date(),
};

// password is removed.

// Real-world use case:
// Never send password to frontend.

// ============================================================
// PICK VS OMIT
// ============================================================

/*

Pick:
-----

Pick<User, "id" | "name">

Meaning:
"I want ONLY these properties."


Omit:
-----

Omit<User, "password">

Meaning:
"I want EVERYTHING except these properties."

*/

// ============================================================
// 6. RECORD<K, T>
// ============================================================

// Record<K, T> creates an object type.

// K = Keys
// T = Value Type

// Syntax:

// Record<KeyType, ValueType>

type UserMarks = Record<string, number>;

const marks: UserMarks = {
  math: 90,
  english: 85,
  science: 95,
};

// Equivalent Index Signature:

interface Marks {
  [subject: string]: number;
}

// Both are similar:

type MarksUsingRecord = Record<string, number>;

// ============================================================
// RECORD WITH FIXED KEYS
// ============================================================

type Role = "admin" | "user" | "manager";

type RolePermissions = Record<Role, boolean>;

const permissions: RolePermissions = {
  admin: true,
  user: false,
  manager: true,
};

/*

TypeScript requires ALL roles.

This would cause an error:

const permissions: RolePermissions = {
  admin: true,
  user: false
};

manager is missing.

*/

// ============================================================
// REAL-WORLD BACKEND EXAMPLES
// ============================================================

// ----------------------------
// CREATE USER DTO
// ----------------------------

// Client should not send:
// id
// createdAt

type CreateUserDTO = Omit<User, "id" | "createdAt">;

const newUser: CreateUserDTO = {
  name: "Nanda",
  email: "nanda@gmail.com",
  password: "password123",
};

// ----------------------------
// UPDATE USER DTO
// ----------------------------

// First remove fields that should not be updated.

type UpdateUserDTO = Omit<User, "id" | "createdAt">;

// Then make remaining fields optional.

type UpdateUser = Partial<UpdateUserDTO>;

const updateData: UpdateUser = {
  name: "New Name",
};

// This is very common in PATCH APIs.

// We can also write it in one line:

type UpdateUserDTO2 = Partial<Omit<User, "id" | "createdAt">>;

// ----------------------------
// PUBLIC USER RESPONSE
// ----------------------------

// Remove sensitive information.

type PublicUserResponse = Omit<User, "password">;

const responseUser: PublicUserResponse = {
  id: 1,
  name: "Nanda",
  email: "nanda@gmail.com",
  createdAt: new Date(),
};

// ============================================================
// 7. EXCLUDE<T, U>
// ============================================================

// Exclude removes types from a Union Type.

type Roles = "admin" | "user" | "manager" | "guest";

type AllowedRoles = Exclude<Roles, "guest">;

/*

Result:

"admin" | "user" | "manager"

*/

const role: AllowedRoles = "admin";

// const role2: AllowedRoles = "guest"; // ERROR

// ============================================================
// 8. EXTRACT<T, U>
// ============================================================

// Extract selects common types from two union types.

type AllRoles = "admin" | "user" | "manager" | "guest";

type Allowed = "admin" | "user";

type ExtractedRoles = Extract<AllRoles, Allowed>;

/*

Result:

"admin" | "user"

*/

// ============================================================
// 9. NONNULLABLE<T>
// ============================================================

// NonNullable removes:
// null
// undefined

type Value = string | number | null | undefined;

type SafeValue = NonNullable<Value>;

/*

Result:

string | number

*/

// ============================================================
// 10. RETURN TYPE<T>
// ============================================================

// ReturnType extracts the return type of a function.

function getUser() {
  return {
    id: 1,
    name: "Nanda",
    email: "nanda@gmail.com",
  };
}

type GetUserReturnType = ReturnType<typeof getUser>;

/*

Result:

{
  id: number;
  name: string;
  email: string;
}

*/

const returnedUser: GetUserReturnType = {
  id: 1,
  name: "Nanda",
  email: "nanda@gmail.com",
};

// ============================================================
// 11. PARAMETERS<T>
// ============================================================

// Parameters extracts function parameters as a Tuple.

function createUser(name: string, age: number, isAdmin: boolean) {
  console.log(name, age, isAdmin);
}

type CreateUserParams = Parameters<typeof createUser>;

/*

Result:

[string, number, boolean]

*/

const params: CreateUserParams = ["Nanda", 22, true];
