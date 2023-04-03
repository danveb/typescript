// Type Aliases 

// we define the type Computer with keys: type
type Computer = {
    name: string, 
    age: number, 
    isActive: boolean, 
};

// function declaration that takes in a param and returns type "Computer" 
function createComputer(computer: Computer): Computer {
    return { name: "", age: 1, isActive: true }; 
};

type Person = {
    readonly _id: string, // "readonly" keyword and won't be changed 
    name: string, 
    email: string, 
    isActive: boolean, 
    creditCard?: number, // "?" keyword so we can define an argument as OPTIONAL
};

// instantiate a new Person
let myPerson: Person = {
    _id: "123456", 
    name: "Bot",
    email: "bot@test.com",
    isActive: false, 
    // creditCard: 102904407526
};

myPerson.email = "aha@test.com"; 
// myUser._id = "80000"; // error; marked as "readonly" 

type CardNumber = {
    cardNumber: string,
};

type CardDate = {
    cardDate: string, 
};

// define new type, combine different types and add a new type
type CardDetails = CardNumber & CardDate & {
    cvv: number, 
}; 



createComputer({ name: "", age: 1, isActive: true }); 