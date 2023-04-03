// Index Signatures 
// useful to create an object but don't know exact names of object keys
// useful because TS requires an index signature to access an Object property

// interface TransactionObject {
//     Pizza: number, 
//     Books: number, 
//     Job: number, 
// }; 

// interface TransactionObject {
//     // index signature that declares key as string / value as number 
//     // we may create an index signature with a string, number, or symbol type 
//     [index: string]: number, 

//     // we can make this index signature readonly 
// };

interface TransactionObject {
    readonly [index: string]: number; 
    Pizza: number, 
    Books: number, 
    Job: number, 
}

const sold: TransactionObject = {
    Pizza: -10, 
    Books: -5, 
    Job: 50, 
}; 

const soldForecast: TransactionObject = {
    Pizza: -100, 
    Books: 0, 
    Job: 0, 
}; 

console.log(sold.Pizza); // 

let prop: string = "Pizza"; 
// console.log(sold[prop]); // trying to access dynamically the Object

function netQty(transactions: TransactionObject): number {
    let total = 0;
    // looping through transactions Object
    for(let transaction in transactions) {
        total += transactions[transaction]; 
    };
    return total; 
}

console.log(netQty(sold)); // 35 

// Optional Properties 
interface Student {
    // index signature
    [key: string]: string | number | number[] | undefined

    // properties
    name: string, 
    GPA: number, 
    classes?: number[], 
}; 

// initialize student Object
const student: Student = {
    name: "Doug", 
    GPA: 3.5, 
    classes: [100, 200, 300, 400], 
}; 

// console.log(student.test); 

// iteration without keyof assertions
// we first MUST have index signature present 
for(let key in student) {
    console.log(`${key}: ${student[key]}`); 
}; 

// keyof Assertions
// keyof creates a union type of name, GPA, classes
for(let key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`); 
}; 

// create an array from student object
Object.keys(student).map((key) => {
    console.log(student[key as keyof typeof student]); 
}); 

// function declaration with key: keyof Student object
function logStudentKey(student: Student, key: keyof Student): void {
    console.log(`Student ${key}: ${student[key]}`); 
}; 

logStudentKey(student, "GPA"); // "Student GPA: 3.5" 
logStudentKey(student, "name"); // "Student name: Doug" 

//////////////////////////////////////////////////////////////////////

// interface Incomes {
//     [key: string]: number, 
// };

type Streams = "salary" | "bonus" | "sidehustle" 

// Record utility Type
type Incomes = Record<Streams, number> 

const monthlyIncomes: Incomes = {
    salary: 500, 
    bonus: 100, 
    sidehustle: 250, 
}; 

// loop 
for(let revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]); 
}; 