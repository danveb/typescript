import { getUserFullName } from "../5-assign-types-to-variables";

describe("getUserFullName function", () => {
    test("should return full name for user", () => {
        expect(getUserFullName({ id: 1, firstName: "John", lastName: "Wick", isAdmin: true, })).toBe("John Wick"); 
    }); 
}); 