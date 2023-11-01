import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitch from "./ThemeSwitch";
import * as hooks from "hooks";

jest.mock("hooks", () => ({
  useTheme: jest.fn(),
}));

describe("ThemeSwitch component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  const mockOnClick = jest.fn();

  it("renders with dark theme icon", () => {
    hooks.useTheme.mockReturnValue({ name: "light-theme" });
    render(<ThemeSwitch onClick={mockOnClick} />);
    const themeIcon = screen.getByRole("img");
    expect(themeIcon).toHaveAttribute("alt", "dark-theme-icon");
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("renders with light theme icon", () => {
    hooks.useTheme.mockReturnValue({ name: "dark-theme" });
    render(<ThemeSwitch onClick={mockOnClick} />);
    const themeIcon = screen.getByRole("img");
    expect(themeIcon).toHaveAttribute("alt", "light-theme-icon");
  });
});
