// TypeScript 
// TypeScript is a superset of JavaScript that allows to write stricter, more correct JS syntax
// with the use of "types" we can achieve a better JavaScript code output 

// let user = {
//     name: "Danny",
//     age: 10, 
// }

// console.log(user.name); 

interface User {
    name: string, 
    age: number, 
    location: string, 
}; 

let newUser: User = {
    name: "Danny", 
    age: 15, 
    location: "Buenos Aires", 
}; 