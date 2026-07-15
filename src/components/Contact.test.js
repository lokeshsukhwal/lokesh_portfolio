import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Contact from "./Contact";

jest.mock("../config", () => ({
  contactFunctionUrl: "https://example.supabase.co/functions/v1/contact-submit",
  supabaseAnonKey: "public-anon-key",
}));

function completeForm() {
  fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: "Jane Smith" } });
  fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: "jane@example.com" } });
  fireEvent.change(screen.getByLabelText(/what would you like to discuss/i), { target: { value: "DevOps role" } });
  fireEvent.change(screen.getByLabelText(/^message$/i), { target: { value: "I would like to discuss a platform engineering opportunity." } });
}

afterEach(() => {
  jest.restoreAllMocks();
});

test("stores a contact message through the Supabase function", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ success: true, id: "message-id" }),
  });
  render(<Contact />);
  completeForm();

  fireEvent.click(screen.getByRole("button", { name: /send message/i }));

  expect(await screen.findByText(/message delivered/i)).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  const [url, options] = global.fetch.mock.calls[0];
  expect(url).toContain("/functions/v1/contact-submit");
  expect(options.headers.Authorization).toBe("Bearer public-anon-key");
  expect(JSON.parse(options.body)).toMatchObject({ email: "jane@example.com", subject: "DevOps role" });
});

test("shows the email fallback when storage fails", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    json: async () => ({ success: false, error: "Message could not be stored." }),
  });
  render(<Contact />);
  completeForm();

  fireEvent.click(screen.getByRole("button", { name: /send message/i }));

  await waitFor(() => expect(screen.getByText(/please email me directly/i)).toBeInTheDocument());
});
