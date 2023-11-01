import { renderHook } from "@testing-library/react";
import useTheme from "./useTheme";
import { ThemeContext } from "themes";

describe("useTheme hook", () => {
  it("throws an error when used outside of ThemeProvider", () => {
    let error;
    jest.spyOn(console, "error").mockImplementation(() => {});
    try {
      renderHook(() => useTheme());
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(
      Error("useTheme must be used within a ThemeProvider")
    );
    console.error.mockRestore();
  });

  it("returns theme when used within ThemeProvider", () => {
    const testTheme = { name: "light-theme" };
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeContext.Provider value={testTheme}>
          {children}
        </ThemeContext.Provider>
      ),
    });
    expect(result.current).toEqual(testTheme);
  });
});
