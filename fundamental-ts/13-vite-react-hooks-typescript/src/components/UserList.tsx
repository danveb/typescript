import { useState, useEffect } from "react"; 

// interface for User 
interface Users {
    id: number, 
    name: string, 
    username: string, 
    email: string, 
}; 

export default function UserList() {
    // useState 
    const [users, setUsers] = useState<Users[]>([]); 

    // API_URL to fetch Users 
    const API_URL = "https://jsonplaceholder.typicode.com/users"; 

    // useEffect -> no type necessary since it returns void 
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(API_URL); 
                const data = await response.json(); 
                // console.log(data); // (10) [...] 
                setUsers(data); 
            } catch(error) {
                console.log(error); 
            }; 
        };
        // call fetchUsers function 
        fetchUsers(); 
        // empty dependency array since we want useEffect to function ONCE when component mounts 
    }, [])

    return (
        <div>
            <h1>User List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}