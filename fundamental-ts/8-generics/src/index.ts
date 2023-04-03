// Generics
// generics allow us to provide a placeholder, any type variable we want

// function echo(arg: string): string {
//     return arg; 
// }; 

// generic function with <T> 
function echo<T>(arg: T): T {
    return arg; 
}; 

// generics are useful with utilty functions 
function isObject<T>(arg: T): boolean {
    return (typeof arg === "object" && !Array.isArray(arg) && typeof arg !== null); 
}; 

console.log(isObject(true));
console.log(isObject("John")); 
console.log(isObject([1,2,3]));
console.log(isObject({
    name: "John", 
}));
console.log(isObject(null)); 

// A good sign we need a "generic" is when our function needs a return 
function isTrue<T>(arg: T): { arg: T, is: boolean } {
    // type guard 
    if(Array.isArray(arg) && !arg.length) {
        return { arg, is: false }; 
    }; 
    if(isObject(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    };
    return { arg, is: !!arg }; 
}; 

// define a function "last" that takes in an arr of type number and returns the last element of the array 
function last(arr: Array<number>): number {
    return arr[arr.length - 1]; 
}; 

// define a function "lastGeneric" that takes in a generic [] and returns the last element of the array 
function lastGeneric<T>(arr: T[]): T {
    return arr[arr.length - 1]; 
}; 

let myArray = [1, 2, 3]
console.log(last(myArray)); // 3
console.log(lastGeneric(myArray)); // 3 

let lastNumElement = lastGeneric<number>([10, 20, 30]); 
console.log(lastNumElement); // 30 

let lastStrElement = lastGeneric<string>(["a", "b", "c"]); 
console.log(lastStrElement); // "c"

// Interface with Generic 
interface BooleanCheck<T> {
    value: T,
    is: boolean, 
}; 

function checkBooleanValue<T>(arg: T): BooleanCheck<T> {
        // type guard 
        if(Array.isArray(arg) && !arg.length) {
            return { value: arg, is: false }; 
        }; 
        if(isObject(arg) && !Object.keys(arg as keyof T).length) {
            return { value: arg, is: false }
        };
        return { value: arg, is: !!arg }; 
}; 

interface HasID {
    id: number, 
}; 

// function 
function processUser<T extends HasID>(user: T): T {
    // process the user with logic 
    return user; 
}; 

console.log(processUser({ id: 1, name: "Danny" })); 

function getUsersProperty<T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] {
    return users.map((user) => {
        return user[key]; 
    }); 
}; 

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

//////////////////////////////////////

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("John")
console.log(store.state)
store.state = "Dave"
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = ['Dave', 42, true]
console.log(myState.state)