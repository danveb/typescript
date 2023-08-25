import { render, screen } from "@testing-library/react";
import { Person } from "../Person";

describe("test Person component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(<Person name="Danny" />); 
  });

  // snapshot test
  test("creates a snapshot", () => {
    const { asFragment } = render(
      <Person name="Jack" />
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  }); 

  // getByText
  test("renders a name", () => {
    render(<Person name="Sophie" />); 
    const text = screen.getByText("Name is Sophie"); 
    expect(text).toBeInTheDocument(); 
  });

  // getByRole
  test("finds aria-role", () => {
    render(<Person name="Juan" />); 
    const divElement = screen.getByRole("contentinfo"); 
    expect(divElement).toHaveTextContent("Name is Juan"); 
    expect(divElement).toBeInTheDocument(); 
    expect(divElement).toHaveAttribute("role", "contentinfo"); 
  }); 
});