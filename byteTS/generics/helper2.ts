// define a generic function that takes in an array and an element of the array and returns the index where this element is located 

const array = [55, 99, 77]; 

function getIndexOfArrayItem<T>(arr: T[], element: T) {
  for(let i = 0; i < arr.length; i++) {
    // check: if current element matches target we'll reeturn its index 
    if(arr[i] === element) {
      return i; 
    }
  }
}

console.log(getIndexOfArrayItem(array, 77)); // 2