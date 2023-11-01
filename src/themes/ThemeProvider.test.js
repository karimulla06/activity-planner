import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { THEMES } from "content/constants";
import ThemeProvider from "./ThemeProvider";

describe("ThemeProvider", () => {
  const renderThemeProvider = () => {
    render(
      <ThemeProvider>
        <div data-testid="child-component">Child Component</div>
      </ThemeProvider>
    );
  };

  test("renders ThemeSwitch and children", () => {
    renderThemeProvider();

    const childComponent = screen.getByTestId("child-component");
    expect(childComponent).toBeInTheDocument();

    const themeSwitch = screen.getByRole("button");
    expect(themeSwitch).toBeInTheDocument();
  });

  test("toggles the theme on click", () => {
    renderThemeProvider();

    const themeSwitch = screen.getByRole("button");

    userEvent.click(themeSwitch); // toggle to dark theme
    let rootElement = document.documentElement;
    expect(rootElement).toHaveStyle(`--theme-name: ${THEMES.DARK}`);

    userEvent.click(themeSwitch); // toggle back to light theme
    rootElement = document.documentElement;
    expect(rootElement).toHaveStyle(`--theme-name: ${THEMES.LIGHT}`);
  });
});
