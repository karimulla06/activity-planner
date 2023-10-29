export function getCssVariables(themeData) {
  let cssVariables = "";
  function flatThemeData(obj, prevKey) {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object") flatThemeData(value, `${prevKey}-${key}`);
      else {
        cssVariables += `${prevKey}-${key}:${value};`;
      }
    });
  }
  flatThemeData(themeData, "--theme");
  return cssVariables;
}
