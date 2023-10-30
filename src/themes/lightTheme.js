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
    danger: "#aa2e2e",
    warning: "#684949",
    info: "#13489e",
    placeholder: "#d5c5c5",
    background: "rgb(9, 121, 72)",
    "background-gradient": `linear-gradient(
      45deg,
      rgba(0, 131, 255, 1) 0%,
      rgba(9, 121, 72, 1) 100%
    )`,
    button: "linear-gradient(90deg, rgb(19, 72, 158) 0%, rgb(9, 85, 162) 100%)",
    "button-hover": `linear-gradient(
      90deg,
      rgb(15, 57, 124) 0%,
      rgb(10, 79, 147) 100%
    )`,
    "box-shadow": "rgba(41, 41, 41, 0.75)",
  },
};

export default lightTheme;
