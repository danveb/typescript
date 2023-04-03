interface User {
    id: number;
    firstName: string; 
    lastName: string; 
    role: "admin" | "user" | "super-admin";
    posts: Post[];
};

interface Post {
    id: number; 
    title: string; 
};

export let defaultUser: User = {
    id: 1, 
    firstName: "John", 
    lastName: "Wick", 
    role: "admin", 
    posts: [
        {
            id: 1, 
            title: "How I eat so much", 
        },
        {
            id: 2,
            title: "Why I like veggies"
        },
    ],
};