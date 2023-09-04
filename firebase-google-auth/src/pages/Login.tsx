import { UserAuth } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; 

export default function Login() {
  // UserAuth
  const { user, loginWithEmailAndPassword } = UserAuth(); 

  // useNavigate
  const navigate = useNavigate(); 

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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Submitting"); 
    // handle form submission to firestore 
    // use destructured email, password and run loginWithEmailAndPassword 
    try {
      await loginWithEmailAndPassword(email, password); 
      navigate("/"); 
    } catch(error) {
      console.log(error); 
    }
  }

  // useEffect
  useEffect(() => {
    // checks if user's email is test@test.com for testing purpose
    if(user?.email === "test@test.com") navigate("/"); 
  }, [navigate, user]);

  return (
    <div className="register">
      <form 
        className="register__form"
        onSubmit={handleSubmit}      
      >
        <h1>Simple Login</h1>
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
        <button type="submit">Login</button>
      </form>
    </div>
  )
}