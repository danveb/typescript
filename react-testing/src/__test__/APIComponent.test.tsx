import { rest } from "msw"; 
import { setupServer } from "msw/node"; 
import { render, screen, waitFor } from "@testing-library/react";
import { APIComponent } from "../APIComponent";

// msw server
const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" })); 
  }), 
); 

// lifecycle functions 
beforeAll(() => server.listen()); // fire up server
afterEach(() => server.resetHandlers()); 
afterAll(() => server.close()); // close server after ALL done

describe("test APIComponent component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(<APIComponent />); 
  });

  // snapshot test
  test("creates a snapshot", () => {
    const { asFragment } = render(
      <APIComponent />
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  }); 

  // mock service worker pkg required to test mock ASYNC
  test("gets the data", async () => {
    render(<APIComponent />); 
    const output = await waitFor(() => screen.findByRole("contentinfo")); 
    expect(output).toBeInTheDocument(); 
    expect(output).toHaveTextContent("Name is Jack"); 
  }); 
});