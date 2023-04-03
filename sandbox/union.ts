function printTix(id: number | string) {
    if(typeof id === "string") {
        return "Please enter id in number format"; 
    } else {
        return `Your Ticket # is ${id}`;
    }
};

function welcomePeople(x: string | string[]) {
    if(Array.isArray(x)) {
        return "Hello, " + x.join(" and "); 
    } else {
        return "Welcome lone traveler " + x; 
    }
};

console.log(welcomePeople(["John", "Mia"])); // Hello, John and Mia 
console.log(welcomePeople("Tina")); // Welcome lone traveler Tina 