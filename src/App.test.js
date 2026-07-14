import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the DevOps portfolio hero content", async () => {
  render(<App />);

  const matches = await screen.findAllByText(/DevOps & Cloud Engineer/i, {}, { timeout: 4000 });
  expect(matches.length).toBeGreaterThan(0);
});
