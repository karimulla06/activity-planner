import { THEMES } from "content/constants";

const darkTheme = {
  name: THEMES.DARK,
  font: {
    family: "Poppins",
  },
  colors: {
    primary: "#fff",
    background: "#000",
    "background-gradient": `linear-gradient(
      45deg,
      #000000 0%,
      #322b3e 100%
    )`,
    "box-shadow": "rgba(202, 202, 202, 0.75)",
  },
};

export default darkTheme;
