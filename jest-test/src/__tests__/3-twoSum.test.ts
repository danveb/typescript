import { twoSum } from "../3-twoSum";

describe("twoSum function", () => {
    test("should add up two numbers and meet the target", () => {
        expect(twoSum([2, 7, 9, 11, 15], 9)).toEqual([0, 1]); 
    });
});