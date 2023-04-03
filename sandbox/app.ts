// "interface" keyword allows us to define object's shape
interface UserOne {
    name: string, 
    age: number, 
    location: string, 
}; 

const user: UserOne = {
    name: "Danny", 
    age: 18, 
    location: "BsAs", 
}; 

console.log(user); // { name: "Danny", age: 15, location: "Buenos Aires" }
console.log(user.location); // "Buenos Aires"

const message: string = "Hello World"; 
console.log(message.toLowerCase()); // "hello world"

function greet(person: string, date: Date) {
    return `Hello ${person}, today's date is ${date.toDateString()}`; 
};

console.log(greet("Danny", new Date())); 

// TypeScript automatically downgrades our code from newer ES6+ syntax down to ES3 when we compile with "tsc" keyword
// if we add a FLAG "--target es2015", it targets to ES6 
// $ tsc --target es2015 hello.ts

// Most common Types of values 
// Primitives: string, number, boolean 
// Arrays -> number[], string[], Array<number>
// any -> we use "any" when we don't want a particular value to cause typechecking errors; useful when we don't want to write out a long type to convince TypeScript

// Type Annotations on variables 
// when declaring a variable using "const", "var", or "let", we optionally add a type annotation to explicitly specify type of the variable 
let myName: string = "Alison"; 

// Functions 
// TypeScript allows to specify types of both input and output values of functions 

// Parameter Type Annotations 
// when declaring a function, we can add type annotations after each parameter to declare what type of parameter the function accepts. 
function myFunction(name: string) {
    console.log(name); 
};
// myFunction(15); // error because we add a "number" argument 
myFunction("John"); // "John"

// Return Type Annotations 
// we can add return type annotations; they go after parameter list
function getRandomNum(): number {
    // generate a random number between 0-9
    return Math.floor(Math.random() * 10); 
};

// Contextual Typing -> when writing functions, the context of the function informs what type it should be 
function newText(str) {
    return str.toUpperCase(); 
}; 

// Object Types 
// most common type in TS is an "object type"
// this refers to any JS value with properties

// Optional Properties 
// object types can specify some or all of their properties are optional. 
// we add a "?" after the property name 
function printName(obj: {
    first: string; 
    last?: string
}) {
    // ... 
}
printName({ first: "Bob" }); 
printName({ first: "Alice", last: "Alison" }); 

// IF WE ACCESS A PROPERTY THAT DOESN'T EXIST, we get an "undefined" value. 
// WE MUST CHECK FOR "undefined" BEFORE USING IT

// Union Types 
// TS allows us to build custom types; we can combine them in different ways 

// Define a Union Type 
// Union Type is a type formed from 2 or more types; these are the "union's members"
function printId(id: string | number) {
    console.log("Your ID is: " + id); 
};
printId(101); // "Your ID is 101"
printId("202"); // "Your ID is 202" 
// We must use both "string" and "number" when defining a union type. if not it complains

function printTicket(id: string | number) {
    if(typeof id === "string") {
        return `Your ticket # is ${id}`;
    } else {
        return `Your ticket # is NOT available`; 
    }
};
printTicket(102932); 

// Type Aliases

// Interfaces
// an interface declaration is another way to name an object type 

interface Point {
    x: number, 
    y: number, 
};

function printCoordinates(ptCoord: Point) {
    console.log("The coordinate's x value is " + ptCoord.x); 
    console.log("The coordinate's y value is " + ptCoord.y); 
}
printCoordinates({ x: 100, y: 250 }); 

// Type Assertions 
// when using HTML elements we can specify a type
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement; 
// OR (except if code is in .TSX file) 
const myNewCanvas = <HTMLCanvasElement>document.getElementById("main_canvas"); 

