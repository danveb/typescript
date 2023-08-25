export default function sum(...numbers: number[]) {
  return numbers.reduce((total, number) => total + number, 0); 
}; 

// Vitest can perform tests in same file 
// need to config on tsconfig.json for type
// need to config vite.config.ts to allow files NOT ENDING IN TEST.TS
if(import.meta.vitest) {
  const { describe, expect, test } = import.meta.vitest

  describe("sum function", () => {
    test("returns 0 with no numbers", () => {
      expect(sum()).toBe(0); 
    }); 
  
    test("returns same number with one number", () => {
      expect(sum(1)).toBe(1); 
    }); 
  
    test("returns sum with multiple numbers", () => {
      expect(sum(1, 2, 3)).toBe(6); 
    });
  });
}