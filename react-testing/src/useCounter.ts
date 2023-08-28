import { useCallback, useState } from "react";

// custom hook useCounter

export function useCounter() {
  const [count, setCount] = useState<number>(0); 

  const increment = useCallback(() => setCount((prevCount) => prevCount + 1), []); 

  return { count, increment }; 
}