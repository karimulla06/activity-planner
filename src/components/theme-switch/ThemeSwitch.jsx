import { useTheme } from "hooks";
import { THEMES } from "content/constants";
import styles from "./theme-switch.module.css";

function ThemeSwitch({ onClick }) {
  const theme = useTheme();
  const altThemeIcon = theme.name === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  return (
    <button className={styles.theme_switch_btn} onClick={onClick}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/${altThemeIcon}-icon.svg`}
        alt={`${altThemeIcon}-icon`}
        height="25px"
        title="Click to Change Theme"
      />
    </button>
  );
}

export default ThemeSwitch;
