function printTix(id) {
    if (typeof id === "string") {
        return "Please enter id in number format";
    }
    else {
        return "Your Ticket # is ".concat(id);
    }
}
;
console.log(printTix(1929301020));
