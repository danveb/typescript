// define a generic function (type parameter) that takes in an input and returns an array of that input
// with generics we're codifying a TYPE relationship between parameter and return value

function convertToArray<T>(input: T): T[] {
  return [input]; 
}

console.log(convertToArray(123)); // [123] 
console.log(convertToArray("hello world")); // [123] 
console.log(convertToArray(true)); // [true] 