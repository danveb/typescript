// Objects are key/value pairs

// const User = {
//     name: "Danny", 
//     age: 17, 
//     isAdmin: true, 
// }; 

// 
function createUser({ name: string, isAdmin: boolean }) {}; 

let newUser = {
    name: "Danny",
    isAdmin: true, 
}; 

createUser(newUser); 

// function declaration that has to return key/value pairs of name,price
function createCourse({

}):{name: string, price: number} {
    return {
        name: "react.js",
        price: 39.99,
    }; 
}; 

export {}