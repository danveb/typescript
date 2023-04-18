import { useState } from "react"; 

export default function Register() {
    // useState
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        password: "", 
    }); 

    // extract credentials from formData 
    const { firstName, lastName, email, password } = formData; 

    // handleChange; default event is a ChangeEvent on Input Element
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value, 
        })); 
    };

    // handleSubmit; default event is a FormEvent on Form Element
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        console.log(`Registering ${firstName}, ${lastName}, ${email} and ${password}!`); 
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Register Form</h1>
            </div>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="firstName"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="lastName"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                />
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