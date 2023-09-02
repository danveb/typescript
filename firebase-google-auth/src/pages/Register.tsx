import React, { useState } from "react";
import "../styles/Register.css"; 

export default function Register() {
  // useState 
  const [formData, setFormData] = useState({
    email: "", 
    password: "", 
  }); 

  // destructure email and pasword from formData 
  const { email, password } = formData; 

  // handleChange 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, 
    }))
  }

  // handleSubmit 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Submitting"); 
    // handle form submission to firebase 
    // ...
  }

  return (
    <div className="register">
      <form 
        className="register__form"
        onSubmit={handleSubmit}      
      >
        <h1>Simple Registration</h1>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          autoComplete="on"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}