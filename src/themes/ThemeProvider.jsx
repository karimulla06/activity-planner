import React, { createContext } from "react";
import { ThemeSwitch } from "components";
import { THEMES } from "content/constants";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { getCssVariables } from "./helpers";

export const ThemeContext = createContext();

const themesData = {
  [THEMES.LIGHT]: lightTheme,
  [THEMES.DARK]: darkTheme,
};

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState(THEMES.LIGHT);

  function toggleTheme() {
    setCurrentTheme((t) => (t === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  }

  // Loop though current theme and set the css variables from the values defined in theme
  React.useEffect(() => {
    const cssVariables = getCssVariables(themesData[currentTheme]);
    document.documentElement.setAttribute("style", cssVariables);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={themesData[currentTheme]}>
      <ThemeSwitch onClick={toggleTheme} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
