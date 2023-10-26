import React from "react";
import styles from "./styled-button.module.css";

const StyledButton = ({ label, onClick, disabled, type }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${
        type === "outlined" ? styles.btn_outlined : ""
      }`}
    >
      {label}
    </button>
  );
};

export default StyledButton;
