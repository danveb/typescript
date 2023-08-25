import { defineConfig } from "vitest/config"; 

export default defineConfig({
  test: {
    // include coverage for non-test files as well 
    includeSource: ["src/**/*.{.js,ts}"], 
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});