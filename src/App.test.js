import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app with loader", () => {
  render(<App />);
  const loaderElement = screen.getByText(/Creating Digital Magic/i);
  expect(loaderElement).toBeInTheDocument();
});
