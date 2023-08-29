import { createContext } from "react";

// initialState
const initialState = {
  first: "Jack", 
  last: "Herrington", 
}; 

export type UserState = typeof initialState;

// export context
const UserContext = createContext<typeof initialState>(initialState); 

export default UserContext