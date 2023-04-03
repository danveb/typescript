// Type Aliases 
// type aliases create type definitions that can be reused 
// we can share type aliases between different variables/objects
type stringOrNumber = string | number; 
type stringArray = string[]; 
type userId = stringOrNumber; // assign userId to existing (string | number)

type FutbolPlayer = {
    name?: string, 
    // position: (string | number), 
    // club: string[], 

    // use type aliases
    position: stringOrNumber, 
    club: stringArray, 
};

let arielOrtega: FutbolPlayer = {
    name: "Ariel Ortega", 
    position: 10, 
    club: ["River Plate", "Argentina"], 
}; 

console.log(arielOrtega); // 

// Interfaces can't do aliases, unlike Types 
// interfaces are more like classes or objects
// types are an alias or type we can assign 

// Literal Type 
// we can fix a value to a variable, similar to defining with "const" 
// useful when fixing a union type, only those are expected
// keeps code DRY 
let myName: "Danny"; 
let username: "Danny" | "John" | "So"; 
username = "So"; 

// Functions 
// define a function with 2 params as numbers; return a number
function add(a: number, b: number): number {
    return a + b; 
};

// Return type "void"
// this is a function that doesn't have an explicit return, it is a side-effect

// define a function that accepts "any" type; return "void" type
function logMessage(message: any): void {
    console.log(message); 
};

logMessage("Hello"); // Hello
logMessage(add(2, 3)); // 5

// function expression -> uses "function" keyword to define a function inside an expression
let subtract = function(c: number, d: number): number {
    return c - d; 
};

logMessage(subtract(100, 99)); // 1

// type with arrow function 
type mathFunctionArrow = (a: number, b: number) => number; 
type mathFunction = {
    a: number, 
    b: number, 
};

// interface with arrow function 
// interface mathFunctionInterface {
//     (a: number, b: number):number
// }; 

let multiply: mathFunctionArrow = function(c, d) {
    return c * d; 
}; 

logMessage(multiply(4, 4)); // 16

// Optional Parameters
// a parameter is optional when we use "?" keyword -> UNION OF number | undefined
// we need a "type guard" to narrow down the type of value assigned to a variable 
function addAll(a: number, b: number, c?: number): number {
    // type guard for handing optional "C" 
    if(typeof c !== "undefined") {
        return a + b + c; 
    }; 
    // should "C" be undefined we just work with a, b
    return a + b; 
}; 

// assign a "default value" to "C" param 
function sumAll(a: number, b: number, c: number = 2): number {
    return a + b + c; 
}; 

console.log(addAll(2, 3, 2)); // 7
console.log(addAll(2, 3)); // 5, because "C" is optional and "undefined" 
console.log(sumAll(2, 3)); // 7

// case: if default value is the first param? 
// when we call the function we pass "undefined" as the first argument 
// we leave last 

function newSum(a: number = 10, b: number, c: number = 5): number {
    return a + b + c; 
}; 

console.log(newSum(undefined, 0)); // 15

// Default values don't work with:
// - type alias 

// Rest Parameters 
// we pass the "rest" as parameters
function total(...nums: number[]): number {
    // reduce method takes in "prev" and "current" 
    return nums.reduce((prev, curr) => {
        return prev + curr; 
    }); 
};

console.log(total(1, 2, 3, 4)); // 10

// Type "never" 
// work with arrow functions 
// for regular functions we strictly specify "never" as return type
function createError(errorMsg: string): never {
    throw new Error(errorMsg); 
}; 

// function infinite() {
//     let i: number = 1; 
//     while(true) {
//         i++; 
//     }; 
// }; 

// return type "never" by default on arrow function
const infinite = () => {
    let i: number = 1; 
    while(true) {
        i++; 
        // if we add a condition to break the loop, return type is "void" 
        // if(i > 10) break; 
    };
}; 

// custom type guard 
function isNum(value: any): boolean {
    return typeof(value === "number") ? true : false; 
}; 

function numOrStr(value: (number | string)): string {
    // type guard to check value of "string"
    if(typeof value === "string") {
        return "string"; 
    } 
    // // type guard to check value of "number"
    // if(typeof value === "number") {
    //     return "number"; 
    // };
    if(isNum(value)) return "number"; 
    // in JS we can just use an empty return... 
    // but in TS we need an explicit return... need to return something of string
    return createError("This should never happen!"); 
    // return "Hello World"; 
}; 
