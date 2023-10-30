import { useState } from "react";
import PropTypes from "prop-types";
import StyledButton from "components/styled-button/StyledButton";
import { getTestIds } from "./helpers";
import { translationKeys } from "content/translationKeys";
import styles from "./number-input.module.css";

NumberInput.propTypes = {
  testId: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  handleSubmit: PropTypes.func,
};

function NumberInput({
  testId,
  label,
  defaultValue = 1,
  min,
  max,
  handleSubmit,
}) {
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

  const testIds = getTestIds(testId);

  return (
    <div className={styles.input_container} data-testid={testIds.container}>
      {label && (
        <span className={styles.label} data-testid={testIds.label}>
          {label}
        </span>
      )}
      <div className={styles.button_container}>
        <button
          onClick={handleDecrement}
          disabled={inputValue === min}
          data-testid={testIds.decrementButton}
        >
          {"<"}
        </button>
        <span data-testid={testIds.inputValue}>{inputValue}</span>
        <button
          onClick={handleIncrement}
          disabled={inputValue === max}
          data-testid={testIds.incrementButton}
        >
          {">"}
        </button>
      </div>
      {handleSubmit && (
        <StyledButton
          onClick={handleSubmitClick}
          label={translationKeys.submit}
          testId={testIds.submitButton}
        />
      )}
    </div>
  );
}
export default NumberInput;
