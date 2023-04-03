// Type Casting vs Type Assertion 
// Official TypeScript docs refer to Type Assertion 
// - telling TypeScript compiler about different types when working with DOM 

// type Aliases 
type One = string; // type keyword
type Two = string | number; // type keyword with union 
type Three = "hello" // type keyword with literal type 

// convert to a more/less specifc type with "as" keyword
let a: One = "hello"; 
let b = a as Two; // assignment of less specific type
let c = a as Three; // assignment of more specific type; because a is already a "string" 

let d = <One>"world"; // we can use <TYPE>, but they can't be used in TSX files (React) 
let e = <string | number>"world"; 

// type assertions for narrowing 
function addOrConcat(a: number, b: number, c: "add" | "concat"): number | string {
    if(c === "add") return a + b; 
    return "" + a + b; 
};

let myVal: string = addOrConcat(2, 2, "concat") as string; // assert "as string", we tell TypeScript to ignore issue of string vs. number 

// be careful because TS sees no problem here, but a string is returned... 
let nextVal: number = addOrConcat(2, 2, "concat") as number; 
console.log(typeof nextVal); // string... 

// Useful Type Assertions in DOM (or webpages) 
const img = document.querySelector("img") as HTMLImageElement; // as HTMLImageElement -> asserts it's HTML element
// const myImg = document.getElementById("img")! as HTMLImageElement; // non-null assertion "!" or best to declare type as HTMLImageElement
const myImg = document.getElementById("img") as HTMLImageElement; 
const nextImg = <HTMLImageElement>document.getElementById("img"); // doesn't work on TSX (React) files

img.src
myImg.src