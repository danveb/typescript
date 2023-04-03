// Interfaces in TypeScript 
// An interface describes objects; we can implement an interface by having the shape the interface requires 
// a broad form of a class that defines what the properties & methods should be

interface UserForInterface {
    readonly db_id: number, // readonly means we can't manipulate this property 
    firstName: string,
    lastName: string, 
    googleId?: string, // "?" is used as "optional" property
    // greet: () => string, // defines a method
    greet(): string, // cleaner way to define a method
    getCoupon(couponName: string, value: number): number, 
}

// allows to rewrite an interface for "User"
// officially called "REOPENING AN INTERFACE" 
interface UserForInterface {
    githubToken: string, 
}

// extend User to Admin
interface AdminForInterface extends UserForInterface {
    role: "admin" | "ta" | "learner", 
}; 

// instantiate danny as User
// instantiate danny as ADMIN NOW
const danny: AdminForInterface = {
    db_id: 19422116, 
    firstName: "Danny", 
    lastName: "B", 
    greet: () => {
        return "Hello buddy!"; 
    },
    getCoupon: (couponName: "10OFF", value: 10) => {
        return 10;
    },
    // work on githubToken 
    githubToken: "AJkdl@#49alkd", 
    role: "admin", 
}; 