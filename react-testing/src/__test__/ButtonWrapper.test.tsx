import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonWrapper } from "../ButtonWrapper";

describe("test ButtonWrapper component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(<ButtonWrapper title="Add Item" />); 
  });

  // snapshot test
  test("creates a snapshot", () => {
    const { asFragment } = render(
      <ButtonWrapper title="Add Item" />
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  }); 

  test("handles onClick", () => {
    const onClick = jest.fn(); 
    render(<ButtonWrapper onClick={onClick} title="Add Item" />); 
    const buttonElement = screen.getByText("Add Item"); 
    fireEvent.click(buttonElement); 
    expect(buttonElement).toBeInTheDocument();  
    expect(onClick).toHaveBeenCalledTimes(1); 
  }); 
});