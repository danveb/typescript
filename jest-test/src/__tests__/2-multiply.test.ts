import { multiply } from "../2-multiply";

describe("multiply function", () => {
    test("should return correct output", () => {
        expect(multiply(5, 5)).toBe(25); 
        expect(multiply(1, 10)).toBe(10); 
    });

    test("should complain when input is not a number", () => {
        expect(multiply(0, 5)).not.toBe(25); 
    }); 
});