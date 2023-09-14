// #1 externalize types directory and import whenever needed 
// import { type Color, FontSize } from "../types" 

// type LastButtonProps = {
//   color: Color; 
//   fontSize: FontSize; 
// }

// export default function LastButton({ color, fontSize }: LastButtonProps) {
//   return (
//     <button
//       style={{ color, fontSize }}
//       className="bg-blue-500 px-4 py-2"
//     >Click me</button>
//   )
// }

// #2 unknown type
// generally when we use API's we may know the type of "data" we get back
// but many instances that we don't know 
// in those cases we can use "unknown" data type + error handling 
import { useEffect } from "react"; 

export default function LastButton() {
  // useEffect with ASYNC/AWAIT 
  // useEffect(async () => {
  //   // fetch data 
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
  //   const data = await response.json(); 
  //   console.log(data); 
  // }, []); 

  // useEffect with .THEN .CATCH
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.json()
    })
    .then((data: unknown) => {
      // run it through ZOD (schema validator)
      // const todo = todoSchema.parse(data); 
      // do something with the data
    })
    .catch((error) => console.log(error)); 
  }, [])

  return (
    <button>Click me</button>
  )
}