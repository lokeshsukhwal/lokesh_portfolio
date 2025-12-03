import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app with loader", () => {
  render(<App />);
  const loaderText = screen.getByText(/Creating Digital Magic/i);
  expect(loaderText).toBeInTheDocument();
});
