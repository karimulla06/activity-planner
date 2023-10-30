import { THEMES } from "content/constants";

const darkTheme = {
  name: THEMES.DARK,
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
    primary: "#fff",
    danger: "#aa2e2e",
    warning: "#684949",
    info: "#13489e",
    placeholder: "#d5c5c5",
    background: "#000",
    "background-gradient": `linear-gradient(
      45deg,
      #000000 0%,
      #322b3e 100%
    )`,
    button: "linear-gradient(90deg, rgb(19, 72, 158) 0%, rgb(9, 85, 162) 100%)",
    "button-hover": `linear-gradient(
      90deg,
      rgb(15, 57, 124) 0%,
      rgb(10, 79, 147) 100%
    )`,
    "box-shadow": "rgba(202, 202, 202, 0.75)",
  },
};

export default darkTheme;
