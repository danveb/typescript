import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "../Counter";

describe("test Counter component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(<Counter />); 
  });

  // snapshot test
  test("creates a snapshot", () => {
    const { asFragment } = render(
      <Counter />
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  }); 

  test("handles a total count of 2 when clicked", () => {
    render(<Counter />); 
    const divElement = screen.getByRole("contentinfo"); 
    const buttonElement = screen.getByText("Add One"); 
    fireEvent.click(buttonElement); 
    fireEvent.click(buttonElement); 
    expect(divElement).toHaveTextContent("Count is 2"); 
  }); 
});