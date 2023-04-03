// add <p>Hello, World!</p> element to #app 
// select <div id="app">
var app = document.getElementById("app");
// create <p></p> 
var p = document.createElement("p");
// add textContent of "Hello World!" to p tag
p.textContent = "Hello World!";
// append <p></p> to app div
app === null || app === void 0 ? void 0 : app.appendChild(p);
