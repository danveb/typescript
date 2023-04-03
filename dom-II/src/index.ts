// Add an <h1> tag with text "Hello World" after the 1st div 

// grab #id from <div> 
let main = <HTMLElement>document.getElementById("main");
// let main = document.getElementById("main") as HTMLInputElement; 
let heading = document.createElement("h1"); 
heading.innerText = "Hello World"; 
main.appendChild(heading); 

// listen for a "click" on button 
// grab #btn from <button>
let button = <HTMLElement>document.getElementById("btn"); 
button.addEventListener("click", function() {
    console.log("clicked"); 
}); 