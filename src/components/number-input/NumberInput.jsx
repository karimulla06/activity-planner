import { useState } from "react";
import StyledButton from "../styled-button/StyledButton";
import styles from "./number-input.module.css";

const NumberInput = ({ label, defaultValue = 1, min, max, handleSubmit }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleIncrement() {
    setInputValue((v) => v + 1);
  }

  function handleDecrement() {
    setInputValue((v) => v - 1);
  }

  function handleSubmitClick() {
    handleSubmit(inputValue);
  }

  return (
    <div className={styles.input_container}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.button_container}>
        <button onClick={handleDecrement} disabled={inputValue === min}>
          {"<"}
        </button>
        <span>{inputValue}</span>
        <button onClick={handleIncrement} disabled={inputValue === max}>
          {">"}
        </button>
      </div>
      {handleSubmit && (
        <StyledButton onClick={handleSubmitClick} label={"Submit"} />
      )}
    </div>
  );
};

export default NumberInput;
