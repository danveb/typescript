// Class in TypeScript
// JavaScript Classes are syntactic sugar for writing Prototypes
// in TypeScript we can also write Classes to define an Object with types 

// TypeScript provides access modifiers to class properties and methods
// "public", "private" or "protected" 
// by default class properties and methods are "public", meaning it allows access from any location
// "private" means we can only use this property, method in the Class
// "protected" means we can use only in inheritance
// when we compile to JavaScript everything will be public; these access modifiers are only available in TypeScript

class User {
    // define types for properties
    firstName: string; 
    lastName: string;
    private age: number; 
    protected address: string; 
    readonly unchangeableName: string; 

    // define constructor with params
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName; 
        this.lastName = lastName; 
    };

    // define method
    getFullName(): string {
        return this.firstName + " " + this.lastName; 
    };

    // changeUnchangeableName(): void {
    //     this.unchangeableName = "foo"; 
    // };
};

// instantiate from class User 
const user = new User("Dracula", "King"); 

console.log(user); 
console.log(user.firstName); // Dracula
console.log(user.lastName); // King
// console.log(user.age); // Error... property "age" is held "private"