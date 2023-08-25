import sum from "./sum"; 
import { describe, expect, test } from "vitest"; 

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