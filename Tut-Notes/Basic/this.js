
"use strict";
//* 1 Global Scope
console.log("Value of this in global scope", this);
// *2 function scope

function valueofthis() {
    console.log("value of this in function scope without strict mode", this);
    // window object
    console.log("value of this in function scope with strict mode", this);
    // undefined
}
valueofthis();