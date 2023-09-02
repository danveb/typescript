import { UserAuth } from "../context/AuthContext"; 
import GoogleButton from "react-google-button";
import "../styles/Home.css"; 

export interface UserDataProps {
  displayName: string | null; 
  email: string | null;
  photoURL: string | null;
  uid: string | null; 
}

export default function Home() {
  const { user, googleSignIn, logOut } = UserAuth(); 

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn(); 
    } catch(error) {
      console.log(error); 
    }
  }

  const handleLogOut = async () => {
    try {
      await logOut(); 
    } catch(error) {
      console.log(error); 
    }
  }

  return (
    <div className="home">
      {user?.displayName ? (
        <>
          <h1>Hello {user.displayName}</h1>
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <>
          <h1>Hello World</h1>
          <GoogleButton onClick={handleGoogleSignIn} />
        </>
      )}
    </div>
  )
}