interface User {
    id: number;
    firstName: string;
    lastName: string;
    isAdmin: boolean; 
}; 

// instantiate a newUser 
const newUser: User = {
    id: 1,
    firstName: "John", 
    lastName: "Wick", 
    isAdmin: true, 
}; 

export function getUserFullName(user: User) {
    return user.firstName + " " + user.lastName; 
};

console.log(getUserFullName(newUser)); // John Wick