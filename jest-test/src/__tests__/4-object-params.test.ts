import { addTwoNumbers } from "../4-object-params";

describe("addTwoNumbers function", () => {
    test("should return correct sum of numbers", () => {
        expect(addTwoNumbers({ firstNum: 10, secondNum: 55 })).toBe(65); 
    });
});