import PropTypes from "prop-types";
import styles from "./styled-button.module.css";

StyledButton.propTypes = {
  testId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

function StyledButton({ testId, label, onClick, disabled, type }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${
        type === "outlined" ? styles.btn_outlined : ""
      }`}
      data-testid={testId}
    >
      {label}
    </button>
  );
}

export default StyledButton;
