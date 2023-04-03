// Add an <h1> tag with text "Hello World" after the 1st div 
// grab #id from <div> 
var main = document.getElementById("main");
// let main = document.getElementById("main") as HTMLInputElement; 
var heading = document.createElement("h1");
heading.innerText = "Hello World";
main.appendChild(heading);
// listen for a "click" on button 
// grab #btn from <button>
var button = document.getElementById("btn");
button.addEventListener("click", function () {
    console.log("clicked");
});
