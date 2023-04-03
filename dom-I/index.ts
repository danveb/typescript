// add <p>Hello, World!</p> element to #app 

// select <div id="app">
const app: HTMLElement = <HTMLElement>document.getElementById("app"); 
// create <p></p> 
const p:HTMLElement = <HTMLElement>document.createElement("p"); 
// add textContent of "Hello World!" to p tag
p.textContent = "Hello World!"; 
// append <p></p> to app div
app?.appendChild(p); 