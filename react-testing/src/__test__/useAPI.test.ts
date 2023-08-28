// import { renderHook } from "@testing-library/react";
// import { useAPI } from "../useAPI";
// import { rest } from "msw";
// import { setupServer } from "msw/lib/node";

// // msw server
// const server = setupServer(
//   rest.get("/api", (req, res, ctx) => {
//     return res(ctx.json({ name: "Jack" })); 
//   }), 
// ); 

// // lifecycle functions 
// beforeAll(() => server.listen()); // fire up server
// afterEach(() => server.resetHandlers()); 
// afterAll(() => server.close()); // close server after ALL done

// describe("test useAPI custom hook", () => {
//   test("useAPI", async () => {
//     const { result, waitFor } = renderHook(() => useAPI()); 
//     await waitFor(() => {
//       expect(result.current).toBe({ name: "Jack" });
//     }); 
//   })
// })