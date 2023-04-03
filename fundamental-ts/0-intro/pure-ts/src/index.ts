// console.log("typescript is here still"); 

// Classes in TypeScript 
class User {
    // define email/name/city as string type
    email: string; 
    name: string; 
    readonly city: string = "buenos aires"; 

    // define public, private, protected, static modifiers 
    // "public" member can be accessed anywhere; it's the default visibility modifier so by default we don't even need to write it
    public country: string; 
    // "protected" members are only visible to subclasses of the class they're declared in 
    // "private" members are like "protected", but don't allow access to the member 
    // private address: string; 

    // constructor and pass 
    constructor(email: string, name: string, country: string) {
        this.email = email; 
        this.name = name;  
        this.country = country; 
        // this.address = address; 
    }
}

// instantiate danny as new User
const danny = new User("d@d.com", "danny", "US"); 
// danny.city = "buenos aires"; 