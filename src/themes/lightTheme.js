import { THEMES } from "content/constants";

const lightTheme = {
  name: THEMES.LIGHT,
  font: {
    family: "Poppins",
    size: {
      heading: "40px",
      title: "18px",
      text: "14px",
      "helper-text": "12px",
      number: "24px",
    },
  },
  colors: {
    primary: "#000",
    button: "#1e90ff",
    "button-hover": "",
    background: "rgb(9, 121, 72)",
    "background-gradient": `linear-gradient(
      45deg,
      rgba(0, 131, 255, 1) 0%,
      rgba(9, 121, 72, 1) 100%
    )`,
    "box-shadow": "rgba(41, 41, 41, 0.75)",
    danger: "#aa2e2e",
    warning: "#684949",
  },
};

export default lightTheme;
