// #1 generics (easy...)
// we can specify a "type" with a generic that returns the same generic "type" 
// type parameter <T,> is compiled from TSX to <T> in JSX
// const convertToArray = <T,>(value: T): T[] => {
//   return [value]; 
// }

// // alternative is cleaner
// function convertToArray<T>(value: T): T[] {
//   return [value]; 
// }

// // call above function with ANY type we want 
// convertToArray(5); 
// convertToArray("Hello"); 

// export default function GenericsButton() {
//   return (
//     <button>Click Generics!</button>
//   )
// }

// #2 example of use of generics 
// we want to have a "relationship" of types when using generics (type parameters)
// type of countValue and countHistory ultimately need to be of same "type", can have an array OK
// cannot make countValue a string and countHistory an array of number
// type ButtonProps<T> = {
//   countValue: T; 
//   countHistory: T[]; 
// }

export default function GenericsButton<T>({ countValue, countHistory }: ButtonProps<T>) {
  return (
    <button>Click me</button>
  )
}