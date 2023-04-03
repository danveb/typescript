// Classes in TypeScript 
// 

class Coder {
    // define properties' type
    // name: string; 
    // music: string; 
    // age: number; 
    // language: string; 

    // 3rd party library property that we don't want to modify 
    // secondLanguage: string; 

    // constructor that builds the object
    // visilibty modifiers to constructor params -> if so we can remove properties type above
    // - public, readonly, private, protected
    // -- public: by default all constructor props are public
    // -- readonly: this means modifier can't be re-assigned
    // -- private: means this modifier can only be accessed from this class only, not anywhere else 
    constructor(public readonly name: string, public music: string, private age: number, protected language: string = "TypeScript") {
        this.name = name; 
        this.music = music; 
        this.age = age; 
        this.language = language; 
    }; 

    // methods 
    public getAge() {
        return `Hello my age is ${this.age}`; 
    }; 
};

// instantiate a new Class 
const Danny = new Coder("Danny", "Rock", 15); 
console.log(Danny.getAge()); // Hello my age is 15
// console.log(Danny.age); // "age" is protected so we can't access outisde of a Class, but when we compile to JS it'll show anyway 

// Extend a Class
class WebDev extends Coder {
    // initialize constructor
    constructor(
        public computer: string, 
        name: string, 
        music: string, 
        age: number, 
    ) {
        // we need to call super to bring in previous Class Coder, like JavaScript
        super(name, music, age); 
        this.computer = computer;
    };

    // methods 
    public getLanguage() {
        return `My favorite language is ${this.language}`;
    };
};

// instantiate an extended Class 
const Sara = new WebDev("Mac", "Sara", "LoFi", 25); 
console.log(Sara.getLanguage()); // "My favorite language is TypeScript"
// console.log(Sara.age); // "age" is private... 
// console.log(Sara.language); // "language" is protected... we can't access

// Interface to Class 
interface Musician {
    name: string, 
    instrument: string, 
    // methods 
    play(action: string): string, 
};

class Guitarist implements Musician {
    name: string;
    instrument: string;
    
    constructor(name: string, instrument: string) {
        this.name = name; 
        this.instrument = instrument; 
    }; 

    // methods 
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`; 
    };
}; 

// instantiate a new Guitarist
const Page = new Guitarist("Eddy", "guitar"); 
console.log(Page); 
console.log(Page.play("strums")); 

// static Class
class Peeps {
    // static class property 
    static count: number = 0; 

    // static method 
    static getCount(): number {
        return Peeps.count; 
    }; 

    public id: number; 

    constructor(public name: string) {
        this.name = name; 
        this.id = ++Peeps.count; // ++ at front means id = 1
    };
};

// instantiate Peeps 
const John = new Peeps("John"); 
const Steve = new Peeps("Steve"); 
const Mary = new Peeps("Mary"); 

console.log(Peeps.count); // 3; since we created 3 Peeps 
console.log(John.id); // 1; John was created second, so id is 1
console.log(Steve.id); // 2; Steve was created second, so id is 2
console.log(Mary.id); // 3; Mary was created second, so id is 3

// Getters & Setters 
// just like React, we use get/set to keep a "state" of an object 

class Bands {
    private dataState: string[]; 

    constructor() {
        this.dataState = []; 
    }; 

    // using "get" only will be readonly... we need a "set" 
    public get data(): string[] {
        return this.dataState; 
    }; 

    // "set" doesn't need to return a value; just "return" 
    public set data(value: string[]) {
        // needs to be an array full of strings
        if(Array.isArray(value) && value.every((element) => typeof element === "string")) {
            this.dataState = value; 
            return; 
        };
    };
};

// instantiate
const MyBands = new Bands(); 
MyBands.data = ["Neil Young", "Led Zep"]; 
console.log(MyBands.data); // getter ["Neil Young", "Led Zep"]
MyBands.data = [...MyBands.data, "ZZ Top"]; // setter 
console.log(MyBands.data); // getter ["Neil Young", "Led Zep", "ZZ Top"]
// MyBands.data = ["Van Halen", 5150]; // error for number... 
