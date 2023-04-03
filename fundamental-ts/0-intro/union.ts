// Union in TypeScript 
// unions are combinations of data types separated by | 
// recommended to keep very strict instead of using a bunch of different types 

let score: number | string = 33; 
score = 44; 
score = "55"; 

type Machine = {
    name: string, 
    id: number, 
};

type Admin = {
    username: string, 
    id: number, 
};

let danny: Machine | Admin = {
    name: "danny", 
    id: 334, 
}; 

danny = {
    username: "db",
    id: 335, 
}; 

function getDbId(id: number | string) {
    // making API calls 
    // console.log(`DB id is ${id}`); 

    // problem with unions... if we have unions we need to handle all cases where type may be "number" or "string"
    // to solve we have to handle type for "number" and "string" 
    if(typeof id === "string") {
        // manipulate the string to lowercase 
        id.toLowerCase(); 
        // else we manipulate the number
    } else {
        return `Your DB id is ${id}`
    }
}; 

console.log(getDbId(3));
console.log(getDbId("491ddef")); 

const data: number[] = [1, 2, 3, 4]; 

// DONT DO THIS 
const dataWrong: (string | number)[] = [1, 2, "3", "4"]; 