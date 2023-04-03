console.log("Hello World"); 

// original JS code for DOM 
// const year = document.getElementById("year"); 
// const thisYear = new Date().getFullYear(); 
// year.setAttribute("datetime", thisYear); 
// year.textContent = thisYear; 

// TypeScript code for DOM 

// #1 variation 
// let year: HTMLElement | null; 
// year = document.getElementById("year"); 
// let thisYear: string; 
// thisYear = new Date().getFullYear().toString(); 
// // type guard for "year" should it be an HTMLElement... 
// if(year) {
//     year.setAttribute("datetime", thisYear); 
//     year.textContent = thisYear; 
// }; 

// #2 variation -> type assertion 
// select #year from <span> and explicitly assert as HTMLSpanElement
const year = document.getElementById("year") as HTMLSpanElement; 
// initialize thisYear as string and convert fullYear to a string to match type
let thisYear: string = new Date().getFullYear().toString(); 
// setAttribute to year 
year.setAttribute("datetime", thisYear); 
// set textContent to thisYear
year.textContent = thisYear; 