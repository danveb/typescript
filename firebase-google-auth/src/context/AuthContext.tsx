import { ReactNode, createContext, useContext, useEffect, useState } from "react"; 
import { User, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, UserCredential } from "firebase/auth"; 
import { auth } from "../firebase";

export interface AuthContextProps {
  googleSignIn: () => Promise<UserCredential>; 
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
  
  // handle login with context API
  // googleSignIn
  // const googleSignIn = async () => {
  //   try {
  //     const provider = new GoogleAuthProvider(); 
  //     const userResponse = await signInWithPopup(auth, provider); 
  //     console.log(userResponse); 
  //     // localStorage.setItem("user", JSON.stringify())
  //   } catch(error) {
  //     console.log(error); 
  //   }
  // }

  // // logOut
  // const logOut = async () => {
  //   try {
  //     localStorage.clear(); 
  //     setUser(null); 
  //     await signOut(auth); 
  //     console.log("User logged out"); 
  //   } catch(error) {
  //     console.log(error); 
  //   }
  // }

  // handle logic on Home
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider(); 
    return signInWithPopup(auth, provider); 
  }

  const logOut = () => {
    return signOut(auth); 
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