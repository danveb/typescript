// #1 pass useState hook
// type CountButtonProps = {
//   count: number; 
//   setCount: React.Dispatch<React.SetStateAction<number>>; 
// }
// export default function CountButton({ count, setCount }: CountButtonProps) {
//   // handleCount 
//   const handleCount = () => {
//     setCount(1); 
//   }

import { ComponentPropsWithoutRef, ReactEventHandler, useEffect, useRef } from "react";

//   return (
//     <button 
//       className="bg-blue-500 text-white rounded px-4 py-2"
//       onClick={handleCount}
//     >
//       {count}
//     </button>
//   )
// }

// #2 type alias vs interface
// defines a CountButtonProps object
// interface CountButtonProps {
//   text: string; 
//   count: number
// }
// // defines a CountButtonProps object 
// type CountButtonProps2 = {
//   text: string; 
//   count: number; 
// }

// // problems with interface? can only define an OBJECT type 
// // type alias can do both OBJECT and any data type, including unions
// // interface URL = string; BAD!!!!!! 
// type URL = string; 
// const URL: URL = "https://www.google.com"; 
// type Color = "red" | "blue" | "green"; 
// const Color: Color = "green"; 

// export default function CountButton() {
//   return (
//     <button>Click Me</button>
//   )
// }

// #3 attributes 
// type ButtonProps = {
//   type: "submit" | "reset" | "button"; 
//   autoFocus?: boolean; 
// }

// export default function CountButton({ type, autoFocus }: ButtonProps) {
//   return (
//     <button>Click Me</button>
//   )
// }

// #4 another way to pass attributes to child component 
// passing WithoutRef 
// type ButtonProps = ComponentPropsWithoutRef<"button">; 

// export default function CountButton({ type, autoFocus }: ButtonProps) {
//   return (
//     <button type={type} autoFocus={autoFocus}>Click Me</button>
//   )
// }

// type ImageProps = ComponentPropsWithoutRef<"img">; 

// export function Image({ src, alt }: ImageProps) {
//   return (
//     <img src={src} alt={alt} />
//   )
// }

// #5 type intersection / interface extension 
// type ButtonProps = {
//   type: "button" | "submit" | "reset"; 
//   color: "red" | "blue" | "green"; 
// }

// // intersect ButtonProps to add more props from above 
// type SuperButtonProps = ButtonProps & {
//   size: "md" | "lg"; 
// }

// interface IButtonProps {
//   type: "button" | "submit" | "reset"; 
//   color: "red" | "blue" | "green"; 
// }

// interface ISuperButtonProps extends IButtonProps {
//   size: "md" | "lg"; 
// }

// // #6 event handlers -> onClick
// import { MouseEvent } from "react";
// export default function CountButton() {
//   // handleClick 
//   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
//     console.log(e, "Clicked!"); 
//   }

//   return (
//     // <button onClick={(e) => console.log("Clicked")}>Click Me!</button>
//     <button onClick={handleClick}>Click Me!</button>
//   )
// }

// #7 useState again! 
// import { useState } from "react";

// type Count = number; 
// type Text = string; 
// type Error = boolean; 
// type User = {
//   name: string; 
//   age: number; 
// }

// export default function CountButton() {
//   // useState
//   const [count, setCount] = useState<Count>(0); 
//   const [text, setText] = useState<Text>(""); 
//   const [isError, setIsError] = useState<Error>(false); 
  
//   // user object as useState
//   const [user, setUser] = useState<User | null>(null); 

//   // use optional chaining in case user is "null" 
//   const name = user?.name; 
//   const age = user?.age; 

//   return (
//     <button>Click Me!</button>
//   )
// }

// #8 useEffect hook
// import { useEffect } from "react";
// export default function CountButton() {
//   // useEffect
//   useEffect(() => {

//   }, []); 

//   return (
//     <button>Click Me!</button>
//   )
// }

// #9 useRef hook 
// export default function CountButton() {
//   const ref = useRef<HTMLButtonElement>(null); 

//   return (
//     <button ref={ref}>Click Me!</button>
//   )
// }

// #10 type assertion "as" keyword 
type ButtonColor = "red" | "blue" | "green"; 

export default function CountButton() {
  // useEffect 
  useEffect(() => {
    // use assertion "as" keyword
    const previousButtonColor = localStorage.getItem("buttonColor") as ButtonColor; 
  }, []); 

  return (
    <button>Click Me!</button>
  )
}