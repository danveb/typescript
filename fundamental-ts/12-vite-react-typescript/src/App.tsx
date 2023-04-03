import Heading from "./components/Heading"; 
import Section from "./components/Section";
import Counter from "./components/Counter"; 
import List from "./components/List"; 

import { useState } from "react";

export default function App() {
    // useState for counter 
    const [count, setCount] = useState<number>(1); 

    return (
        <>
        <Heading title={"Hello"} />
        <Section>This is my Section</Section> {/* title is optional, so we can leave it blank */}
        <Counter setCount={setCount}>Count is {count}</Counter>
        <List items={["coffee", "tacos", "code"]} render={( item: string ) => <span className="gold">{item}</span>}/>
        </>
    )
}