import { useState } from "react"; 

export default function UseStateComponent() {
  // useState
  const [arr, setArr] = useState<number[]>([]); // coerce from never[] to number[] 
  const [name, setName] = useState<string | null>(null); // coerce to union type string | null
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount((prev) => prev + 1); 
  }

  const decrement = () => {
    setCount((prev) => prev - 1); 
  }

  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>Add to array</button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => setName("Jack")}>Set name</button>
        {JSON.stringify(name)}
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <span>Count: {count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}