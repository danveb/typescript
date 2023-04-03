console.log("Hello World"); 

// Compile TS into JS 
// $ tsc index.ts

// Initialize TS config  
// $ tsc --init
// "rootDir": "./src" -> our TS files are always here
// "outDir": "./build" -> our JS file is built here 
// "target": "es2016" -> sets default ES2016 JavaScript s

// Watch TS files from rootDirectory and creates .js files
// $ tsc -w 

// let a = 12;
// let b = "6"; 
// let c = 2; 

// JavaScript data coercion
// JavaScript uses dynamic types, so it will coerce data type to do whatever it wants
// with TypeScript, we need strict types 

// console.log(a / b); // ERROR in TS because we divide a number with string; OK in JS
// console.log(c * b); // ERROR in TS because we multiply a string with number; OK in JS

// Primitive Data Types 
// - number 
// - string 
// - boolean 

let a: number = 12;
let b: number = 6; 
let c: number = 2; 