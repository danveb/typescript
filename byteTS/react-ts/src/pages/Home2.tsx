// import { useState } from "react"; 
import CountButton from "../components/CountButton";

export default function Home2() {
  // useState
  // const [count, setCount] = useState(0); 

  return (
    // #1 useState setter function 
    // <main className="min-h-screen flex justify-center items-center">
    //   <CountButton count={count} setCount={setCount} />
    // </main>

    // <main className="min-h-screen flex justify-center items-center">
    //   <CountButton type="submit" autoFocus={true} />
    // </main>

    // #5 type intersection / interface extension  
    // <main className="min-h-screen flex justify-center items-center">
    //   <CountButton />
    // </main>

    // #6 event handlers -> onClick
    <main className="min-h-screen flex justify-center items-center">
      <CountButton />
    </main>
  )
}