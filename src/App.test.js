import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio positioning and real resume link", async () => {
  render(<App />);

  await screen.findByRole("heading", { name: /Would you ship it/i });
  expect(screen.getByRole("heading", { name: /I build calm, reliable systems/i })).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /resume/i })[0].getAttribute("href")).toMatch(/\/resume\.pdf$/);
});

test("does not present unsupported hero metrics", async () => {
  render(<App />);

  await screen.findByRole("heading", { name: /Would you ship it/i });
  expect(screen.queryByText("70%")).not.toBeInTheDocument();
  expect(screen.queryByText("99.9%")).not.toBeInTheDocument();
  expect(screen.queryByText("24/7")).not.toBeInTheDocument();
  expect(screen.getByText("versioned environments")).toBeInTheDocument();
});
