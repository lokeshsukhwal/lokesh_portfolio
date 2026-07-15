import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import FieldNotes from "./FieldNotes";

test("filters and opens an engineering field note", async () => {
  render(<FieldNotes />);

  fireEvent.click(screen.getByRole("button", { name: "Deployment note" }));
  expect(screen.getByText(/successful build can still produce/i)).toBeInTheDocument();
  await waitFor(() => expect(screen.queryByText(/secure submission pipeline/i)).not.toBeInTheDocument());

  fireEvent.click(screen.getByRole("button", { name: /read note/i }));
  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.getByText(/build, publish, and serve are separate stages/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /close note/i }));
  await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
});
