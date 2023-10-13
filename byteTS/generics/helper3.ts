// define a generic function that takes in a "string" and a number and returns an array with these two elements

function createArrayPair<T, K>(str: T, num: K): [T, K] {
  return [str, num]; 
}

const createArrayPair2 = <T, K>(str: T, num: K): [T, K] => {
  return [str, num]; 
}

console.log(createArrayPair("hello", 10)); // ["hello", 10])