import { useState } from "react"; 

export default function Login() {
    // useState
    const [formData, setFormData] = useState({
        email: "",
        password: "", 
    }); 

    const { email, password } = formData; 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value, 
        })); 
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        console.log(`Submitting ${email} and ${password}`); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Login Form</h1>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    )
}