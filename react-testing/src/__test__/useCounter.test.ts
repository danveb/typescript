import { renderHook, act } from "@testing-library/react"; 
import { useCounter } from "../useCounter";

describe("custom useCounter hook", () => {
  test("should increment", () => {
    // call useCounter with renderHook
    const { result } = renderHook(() => useCounter()); 
    // act with the result 
    act(() => {
      result.current.increment(); 
    }); 
    expect(result.current.count).toBe(1); 
  }); 
}); 