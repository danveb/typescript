import { render, screen } from "@testing-library/react";
import { Sidebar } from "../Sidebar";

describe("test Sidebar component", () => {
  // smoke test
  test("renders without crashing", () => {
    const items = [
      {
        id: 1, 
        name: "test", 
        href: "/test", 
      }, 
    ]; 
    render(<Sidebar items={items} />); 
  });

  // snapshot test
  test("creates a snapshot", () => {
    const items = [
      {
        id: 1, 
        name: "test", 
        href: "/test", 
      }, 
    ]; 
    const { asFragment } = render(
      <Sidebar items={items} />
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  }); 

  // // getAllByRole
  test("finds ariaRole navigation", () => {
    const items = [
      {
        id: 3, 
        name: "bye", 
        href: "/bye", 
      }, 
    ]; 
    render(<Sidebar items={items} />); 
    const anchorElements = screen.getAllByRole("navigation"); 
    expect(anchorElements[0]).toHaveTextContent(items[0].name); 
    expect(anchorElements[0]).toHaveAttribute("href", items[0].href); 
  }); 
});