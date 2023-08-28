import { useState, useEffect } from "react";

interface ItemProps {
  id: number; 
  userId: number; 
  title: string; 
  body: string; 
  name: string; 
  email: string; 
  phone: string; 
}

export default function UseEffectComponent() {
  // const [value, setValue] = useState<number>(1); 
  const [resourceType, setResourceType] = useState<string>("posts"); 
  const [items, setItems] = useState<ItemProps[]>([]); 

  // useEffect(() => {
  //   const timer = window.setInterval(() => {
  //     setValue((prev) => prev + 1); 
  //   }, 1000); 
  //   // cleanup function 
  //   return () => {
  //     window.clearInterval(timer); 
  //   }
  // }, []); // dependency array to remain empty as we want to fire off when component mounts at startup

  // console.log("render"); 
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`); 
      const data = await response.json(); 
      console.log(data); 
      setItems(data); 
    }; 
    fetchTodos(); 
  }, [resourceType]); // dependency array can hold resourceType so it can change every time we re/render our component

  return (
    <div>
      {/* <p>Timer</p>
      <div>{value}</div> */}

      <p>Resource Type</p>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <p>{resourceType}</p>
      {resourceType === "posts" && items.map((item) => (
        // <pre key={item.id}>{JSON.stringify(item)}</pre>
        <pre key={item.id}>
          <h4>{item.title}</h4>
          <span>{item.body}</span>
        </pre>
      ))}
      {resourceType === "users" && items.map((item) => (
        // <pre key={item.id}>{JSON.stringify(item)}</pre>
        <pre key={item.id}>
          <h4>{item.name}</h4>
          <span>{item.email}</span>
        </pre>
      ))}
      {resourceType === "comments" && items.map((item) => (
        // <pre key={item.id}>{JSON.stringify(item)}</pre>
        <pre key={item.id}>
          <h4>{item.body}</h4>
          <span>{item.name}</span>
          <span>{item.email}</span>
        </pre>
      ))}

    </div>
  )
}