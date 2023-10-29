import { THEMES } from "content/constants";

const lightTheme = {
  name: THEMES.LIGHT,
  font: {
    family: "Poppins",
  },
  colors: {
    primary: "#000",
    background: "rgb(9, 121, 72)",
    "background-gradient": `linear-gradient(
      45deg,
      rgba(0, 131, 255, 1) 0%,
      rgba(9, 121, 72, 1) 100%
    )`,
    "box-shadow": "rgba(41, 41, 41, 0.75)",
  },
};

export default lightTheme;
