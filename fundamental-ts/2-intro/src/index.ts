// TypeScript "infers" the type of data we are creating
// this is "implicit", meaning it's not strictly stated
// we can make it explit, where we strictly specify a data type 

let userOne = "Danny"; // TS implicitly infers this string variable is a "string" type
// userOne = 77; // TS throws error when we re-assign variable to a number
let userTwo: string = "Danny"; 
userTwo = "Tommy"; 

// Primitive Data Types 
// - number 
// - string 
// - boolean 

let mainUser: string; 
let magicNumber: number;
let isLoading: boolean; 

mainUser = "Anna"; 
magicNumber = 27; 
isLoading = false; 


// More on Types 
// - any -> "any" data type... it defeats the purpose of using TS, but sometimes we might need to use 
// - union -> "union" is when we declare 2 distinct types separated by | 
// - RegExp -> "regex" 

let album: any; 
album = "Van Halen";
album = 22; 

let building: string | number; 
building = 77; 
building = "DMZ"; 

let postId: number | string;  
let isActive: number | boolean; // 0 for false, 1 for true 

let regEx: RegExp = /\w+/g; // RegExp type; for selecting all words

// Function parameters... 
// TS implicitly assigns params to "any" type
// we have to explictly include the type

function sum(a: number, b: number) {
    return a + b; 
};
