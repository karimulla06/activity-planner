import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders activity planner app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Activity Planner/i);
  expect(linkElement).toBeInTheDocument();
});
