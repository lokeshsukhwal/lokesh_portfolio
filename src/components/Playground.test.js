import { fireEvent, render, screen } from "@testing-library/react";
import Playground from "./Playground";

test("approves a release when every gate passes", () => {
  render(<Playground />);

  fireEvent.click(screen.getByRole("button", { name: /evaluate release/i }));

  expect(screen.getByRole("heading", { name: /ready to release/i })).toBeInTheDocument();
  expect(screen.getByText("5/5 gates")).toBeInTheDocument();
});

test("blocks a risky hotfix with missing critical gates", () => {
  render(<Playground />);

  fireEvent.click(screen.getByRole("button", { name: /risky hotfix/i }));
  fireEvent.click(screen.getByRole("button", { name: /evaluate release/i }));

  expect(screen.getByRole("heading", { name: /release blocked/i })).toBeInTheDocument();
  expect(screen.getByText(/critical gates are incomplete/i)).toBeInTheDocument();
});
