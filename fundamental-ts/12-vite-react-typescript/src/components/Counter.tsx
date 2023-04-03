import { ReactNode } from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>, 
    children: ReactNode, 
}; 

// pass CounterProps for our props
export default function Counter({ setCount, children }: CounterProps) {
    // useState; start counter number at 1
    // const [count, setCount] = useState<number>(1); 

    return (
        <>
            <h1>{children}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    )
}