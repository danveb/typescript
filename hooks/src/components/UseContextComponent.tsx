import { useContext, useState } from "react";
import UserContext, { UserState } from "../store"; 

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext); 

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

function UseContextComponent() {
  // useState
  const [user, setUser] = useState<UserState>({
    first: "Jane", 
    last: "Smith", 
  }); 

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() => setUser({
          first: "Jack", 
          last: "Walton", 
        })}
      >Change context</button>
    </UserContext.Provider>
  )
}

export default UseContextComponent