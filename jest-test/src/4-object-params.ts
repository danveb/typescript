type AddTwoNumbers = {
    firstNum: number;
    secondNum: number;
}; 

// export function addTwoNumbers(firstNum: number, secondNum: number) {
export function addTwoNumbers(params: AddTwoNumbers) {
    return params.firstNum + params.secondNum; 
};