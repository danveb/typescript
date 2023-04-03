import { add } from "../1-add"; 

describe("add", () => {
    test("should add two numbers", () => {
        expect(add(1, 2)).toBe(3); 
    });
}); 