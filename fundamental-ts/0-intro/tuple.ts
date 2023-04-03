// Tuple in TypeScript
// Tuples are a data structure in TypeScript that contain 2 or more values of different data types
// generally we use a "number" and "string" type on tuples

let employee: (number | string)[] = [1, "Danny"];
let person: (number | string | boolean)[] = [1, "plumber", true]; 

// initialize a tuple 
let tUser: [string, number, boolean]; 
// add properties to tUser 
tUser = ["admin", 44, false]; 

let rgb: [number, number, number] = [255, 123, 112]; 

// define a type of User 
type User = [number, string]; 
const newUser: User = [11, "example@google.com"]; 

// Problem with Tuples and using array methods like push, pop, unshift, shift 
// TypeScript does NOT discriminate from using array methods to tuples, so it doesn't warn us
// CAREFUL ABOUT THIS ISSUE! 

