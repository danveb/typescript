// let url = "https://www.google.com"; // TS can infer it's a string

import { ReactNode } from "react"

// function convertCurrency(amount: number, currency: string) {
//   // ...
// }

// #1
// export default function Button(props: {
//   backgroundColor: string
// }) {
//   // destructure props 
//   const { backgroundColor } = props; 

//   return (
//     <button className="bg-blue-500 text-white rounded px-4 py-2">Click Me</button>
//   )
// }

// #2 inline props 
// export default function Button({ backgroundColor, fontSize, pillShape }: {
//   backgroundColor: string; 
//   fontSize: number; 
//   pillShape: boolean; 
// }) {
//   return (
//     <button className="bg-blue-500 text-white rounded px-4 py-2">Click Me</button>
//   )
// }

// #3 types to avoid inline props 
// type ButtonProps = {
//   backgroundColor: string, 
//   fontSize: number, 
//   pillShape: boolean, 
// }

// export default function Button({ backgroundColor, fontSize, pillShape }: ButtonProps) {
//   return (
//     <button className="bg-blue-500 text-white rounded px-4 py-2">Click Me</button>
//   )
// }

// #4 combine types and reuse
// type Color = "red" | "blue" | "green"; 

// type ButtonProps = {
//   backgroundColor: Color;
//   textColor: Color;
//   fontSize: number; 
//   pillShape: boolean; 
//   padding: [number, number, number, number]; 
// }

// export default function Button({ backgroundColor, textColor, fontSize, pillShape, padding}: ButtonProps) {
//   return (
//     <button className="bg-blue-500 text-white rounded px-4 py-2">Click Me</button>
//   )
// }

// #5 use combined types and properly style button component 
// type Color = "red" | "blue" | "green"; 

// type ButtonProps = {
//   backgroundColor: Color; 
//   textColor: Color; 
//   fontSize: number; 
//   pillShape?: boolean; 
//   padding: [number, number, number, number]; 
// }

// export default function Button({ backgroundColor, textColor, fontSize, padding }: ButtonProps) {
//   return (
//     <button
//       style={{ backgroundColor, color: textColor, fontSize, padding: `${padding[0]}px ${padding[0]}px ${padding[0]}px ${padding[0]}px` }}
//     >Click Me</button>
//   )
// }

// #6 better if we just define a global "style" and pass as props 
// type ButtonProps = {
//   style: React.CSSProperties; 
// }

// export default function Button({ style }: ButtonProps) {
//   return (
//     <button style={style}>Click Me</button>
//   )
// }

// #7 accept an onClick method from App component into Button component 
// type ButtonProps = {
//   handleClick: () => void; 
// }

// export default function Button({ handleClick }: ButtonProps) {
//   return (
//     <button 
//       className="bg-blue-500 text-white rounded px-4 py-2"
//       onClick={handleClick}
//     >Click Again</button>
//   )
// }

// #8 accept a children from App component and its children will be a ReactNode 
type ButtonProps = {
  children: ReactNode; 
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-blue-500 text-white rounded px-4 py-2">{children}</button>
  )
}