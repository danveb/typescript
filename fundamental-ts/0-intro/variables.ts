let greetings: string = "Hello World"; 

console.log(greetings); 

// greetings = 6; // error; initially declared as type "string"
// greetings = true; // error; initially declared as type "string"

// number 
// TypeScript is smart enough that we don't need to annotate types to everything 
// we may be able to leave things without "types" 
let userId: number = 370591; 
console.log(userId.toLocaleString()); // 370,591
let computerId = 9130; // OK 

// boolean
let userLoggedIn: boolean = false; 
console.log(!userLoggedIn); // true

// any 
let hero: any; // ideally we want to infer type "string" 
function getHero() {
    return "Captain America"; 
};
hero = getHero(); 
console.log(hero); // Captain America



// removes error about greetings being redeclared as block-scope 
export {}