import { ReactNode, createContext, useContext, useEffect, useState } from "react"; 
import { User, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"; 
import { auth } from "../firebase";

export interface AuthContextProps {
  googleSignIn: () => Promise<void>; 
  logOut: () => Promise<void>; 
  user: User | null; 
}

export interface AuthContextProviderProps {
  children: ReactNode; 
}

// initialize context 
const AuthContext = createContext({} as AuthContextProps); 

// initialize provider
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // useState
  const [user, setUser] = useState<User | null>(null); 

  // useEffect 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    }); 
    return () => {
      unsubscribe(); 
    }; 
  }, []);
  
  // googleSignIn
  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider(); 
      const userResponse = await signInWithPopup(auth, provider); 
      console.log(userResponse); 
    } catch(error) {
      console.log(error); 
    }
  }

  // logOut
  const logOut = async () => {
    try {
      setUser(null); 
      await signOut(auth); 
      console.log("User logged out"); 
    } catch(error) {
      console.log(error); 
    }
  }

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      { children } 
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext); 
}