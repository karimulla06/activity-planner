import { useTheme } from "hooks";
import PropTypes from "prop-types";
import { THEMES } from "content/constants";
import styles from "./theme-switch.module.css";

ThemeSwitch.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function ThemeSwitch({ onClick }) {
  const theme = useTheme();
  const altThemeIcon = theme.name === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  return (
    <button className={styles.theme_switch_btn} onClick={onClick}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/${altThemeIcon}-icon.svg`}
        alt={`${altThemeIcon}-icon`}
        height="25px"
      />
    </button>
  );
}

export default ThemeSwitch;
