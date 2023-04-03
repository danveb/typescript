// TypeScript infers data types automatically 
// if we "intellisense" we can figure out the data types for each variable

let stringArray = ["hello", "world", "friend"]; 
let guitars = ["strat", "les paul", 5150]; 
let mixedData = ["EVH", 1984, true]; 

stringArray[0] = "john"; 
// stringArray.push(42); // error because stringArray is type string[]
stringArray.push("hey"); 

guitars[0] = 1984; // error; guitars array is type (string | number)[] it's OK 
guitars.unshift("jim"); // OK 
// guitars.push(true); // error; only (string | number)[]

// initialize empty array 
// TS infers test array is any[]
let test = []; 

// initialize array of string[]
let animals: string[] = ["pepito", "jojo"]; 
animals.push("mia"); 

// Tuple 
// data structure that ties specific positions to a value 
// stricter than an array; data type must match exactly 

// initialize a "tuple" with string, number, boolean data types 
let tupleOne: [string, number, boolean] = ["danny", 77, true]; 

// Objects 
// data structure for collection of properties/values 
// since arrays are a type of object, we can re-assign an object to be array
let objOne: object = {}; 
objOne = []; 
console.log(typeof objOne); // object (object) 
console.log(typeof guitars); // object (array)

// initialize an object 
// NOTE: we can't specify :object... 
// need to create a "type" or "interface" 
const exampleObject = {
    prop1: "Danny", 
    prop2: true, 
}; 

exampleObject.prop2 = false; 

// Object Type Annotation
// we can create a "type" to define the structure of an object

// initialize a Type for object
type Employee = {
    name: string, 
    age: number, 
    alumni: (string | number)[]
};

// instantiate employee1 object
let employee1: Employee = {
    name: "Ed", 
    age: 17, 
    alumni: ["Cal State F", "UCLA", 2014],
}; 
let employee2: Employee = {
    name: "So", 
    age: 30, 
    alumni: ["USC", 2015],
};

// assign employee1 equal to employee2
// TypeScript doesn't complain as the keys/values are all present, following the types
// employee1 = employee2; 

// Optional Object Properties 
type Adidas = {
    model: string, 
    size?: number, // "?" is for optional property; it becomes a union of "number | undefined"
}; 

let adiOne: Adidas = {
    model: "predator", 
    size: 11, 
};

let adiTwo: Adidas = {
    model: "adiZero", 
};

// Object type as parameter 
function newEmployee(employee: Employee) {
    return `Hello, my name is ${employee.name} and I'm ${employee.age}s old. I graduated from ${employee.alumni[1]}.`
}; 

console.log(newEmployee(employee1)); 

// Type vs. Interface 
// preference to use either "type" or "interface"
// "interfaces" are better for Class (with methods), but "type" still works the same way
interface FutbolPlayer {
    name?: string, 
    age: number, 
    position: string, // optional property 
    club: string, 
}; 

let arielOrtega: FutbolPlayer = {
    // name: "Ariel Ortega", 
    age: 38, 
    position: "CMF", 
    club: "River Plate", 
}; 

function bestPlayer(player: FutbolPlayer) {
    // narrowing... if this OPTIOINAL property is present? 
    if(player.name) {
        return `${player.name} is one of the best ${player.position} players of ${player.club}`
    };
    return "Hello!"; 
}; 

console.log(bestPlayer(arielOrtega)); 

// Enums -> "enumerated"
// TypeScript enums are NOT a type-level addition to JavaScript, but something added to language and runtime

enum Points {
    Lose, // default enum of 0, subsequent are +1 unless we strictly define 
    Tie, 
    Win = 3, // strictly define "Win" as 3 points 
}; 

console.log(Points.Lose); // 0; 
console.log(Points.Tie); // 1; 
console.log(Points.Win); // 3; 