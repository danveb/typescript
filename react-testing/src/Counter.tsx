import { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); 

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Add One</button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  )
}