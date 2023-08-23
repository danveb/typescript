import { useState } from "react";
import "../styles/TodoList.css"; 

interface Item {
  id: number; 
  title: string; 
  completed: boolean; 
}

export default function TodoList() {
  const [todos, setTodos] = useState<Item[]>([
    {
      id: 1, 
      title: "Learn TypeScript", 
      completed: true, 
    },
    {
      id: 2, 
      title: "Build Portfolio", 
      completed: false, 
    },
    {
      id: 3, 
      title: "Build Todo List", 
      completed: false, 
    },
  ]); 

  const [input, setInput] = useState<string>(""); 

  const handleToggle = (id:number) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id) {
          return {...todo, completed: !todo.completed }
        }
        return todo; 
      }),
    );
  }; 

  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), title: input, completed: false }; 
    setTodos([...todos, newTodo]); 
  };

  return (
    <div className="main-container">
      <h1>Simple Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >{todo.title}</li>
        ))}
      </ul>
      <input 
        type="text"
        placeholder="Add todo"
        name="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}