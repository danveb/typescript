import { useState } from "react"; 
import "../styles/Counter.css"; 

// create a counter with buttons
// button + to increase count -> onClick 
// button - to decrease count -> onClick 
// if count is below a certain threshold we reset back to 0

export default function Counter() {
    // useState 
    // we can be explicit and define the type count/setCount is 
    // define as number starting at 0
    const [count, setCount] = useState<number>(0); 

    // handleClickUp
    const handleClickUp = (): void => {
        setCount((prevCount) => prevCount + 1); 
    };
    // handleClickDown
    const handleClickDown = (): void => {
        setCount((prevCount) => prevCount - 1); 
    };

    return (
        <div className="card">
            <button onClick={handleClickUp}>+</button>
            <p>Count is {count}</p>
            <button onClick={handleClickDown}>-</button>
        </div>
    )
}