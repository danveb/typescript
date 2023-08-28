import { render, screen, fireEvent } from "@testing-library/react"; 
import { Provider } from "react-redux";
import { ReduxCounter } from "../ReduxCounter";
import { store } from "../store"; // to use main store

describe("ReduxCounter", () => {
  test("increment when count is 0", () => {
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    ); 

    const counter = screen.getByRole("contentinfo"); 
    expect(counter).toHaveTextContent("0"); 

    const addButton = screen.getByText("Increment", { exact: false }); 
    fireEvent.click(addButton); 
    expect(counter).toHaveTextContent("1"); 
  });
  
  test("increment one more", () => {
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    ); 

    const counter = screen.getByRole("contentinfo"); 
    expect(counter).toHaveTextContent("1"); 

    const addButton = screen.getByText("Increment", { exact: false }); 
    fireEvent.click(addButton); 
    expect(counter).toHaveTextContent("2"); 
  });
});