interface User {
    id: number; 
    firstName: string; 
    lastName: string; 
    role: "admin" | "user" | "super-admin"; 
}; 

export let defaultUser: User = {
    id: 1, 
    firstName: "John",
    lastName: "Wick", 
    role: "admin", 
};