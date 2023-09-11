let val: unknown;

val = 42;
console.log(typeof val)

val = true;
console.log(typeof val)

val = 'max';
console.log(typeof val)

val = [];
console.log(typeof val)

// unkown can work in a simmilar way with the Any type

let v: any;

v = 42;
console.log(typeof v)

v = true;
console.log(typeof v)

v = 'max';
console.log(typeof v)

v = [];
console.log(typeof v)
/**
 * the unkown type:
 * this type is asserted to a varaible when we don't know the kind/type of a variable or input that our user will choose to work with
 */

/**
 * Difference between any and unkown:
 * -> unkown performs type checking
 * -> you can assign anything to unkown but you can't assign unkown to anything except itself.
 * -> we cant perform a specific operation to an unkown typed variable, we'll have to assert it to a specifice type
 */

let vAny: any = 10; // we can assign anything to any typed variable
let vUnkown: unknown = 20; // just like any, we can also assig anything to an unkown typed variable

let num1: number = vAny // Any type is assignable to anything
let num2: number = vUnkown // Invalid: we can not assign vUnkown to without an explicit type assertion

vAny.method() // this is fine
vUnkown.method() // this is not ok because we don't know anything about this varaible
