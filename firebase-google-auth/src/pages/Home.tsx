import { UserAuth } from "../context/AuthContext"; 
import GoogleButton from "react-google-button";

export default function Home() {
  const { user, googleSignIn, logOut } = UserAuth(); 

  return (
    <div>
      {user?.displayName ? (
        <>
          <h1>Hello {user.displayName}</h1>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <>
          <h1>Hello World</h1>
          <GoogleButton onClick={googleSignIn} />
        </>
      )}
    </div>
  )
}