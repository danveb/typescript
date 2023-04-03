function addTwo(num: number) {
    return num + 2; 
}; 

console.log(addTwo(5)); // 7

function getUpper(val: string) {
    return val.toUpperCase(); 
};

console.log(getUpper("hello world")); // HELLO WORLD

function signUpUser(name: string, email: string, age: number) { 
    return `Name: ${name}, email: ${email}, age: ${age}`; 
};

console.log(signUpUser("Danny", "test@test.com", 20)); 

// default value for isAdmin Boolean of "false" 
const loginUser = (name: string, email: string, isAdmin: Boolean = false) => {
    return `Name: ${name}, email: ${email}, isAdmin: ${isAdmin}`; 
};
// we don't want to pass argument for isAdmin? 
console.log(loginUser("Danny", "test@test.com")); 
// if we want to pass argument for isAdmin we override default value 
console.log(loginUser("Sora", "sora@test.com", true)); 

// ===

// we can do type inference on the return value of the function
// in this case our function receives a number, and our return should also be a number
function multiplyFive(num: number): number {
    return num * 5; 
}
console.log(multiplyFive(5)); // 25 

// explicitly mention that we can return multiple types
// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true
//     } else {
//         return "200 OK"; 
//     }
// }

const getHello = (str: string):string => {
    return `Hello ${str.toLowerCase()}!`
}

console.log(getHello("Johnny")); 

// Array of strings 
const heroes: string[] = ["thor", "spiderman", "ironman"]; 
heroes.map((hero: string) => {
    return `Hero is ${hero}`
})

// returning "void" type 
function consoleError(errorMsg: string): void {
    console.log(errorMsg); 
};

// we don't need to return "void" type because we're going to do something 
function handleError(errorMsg: string) {
    throw new Error(errorMsg); 
}

// remove any errors
export {}