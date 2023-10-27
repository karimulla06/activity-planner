import React from "react";
import styles from "./text-input.module.css";

const TextInput = ({ testId, handleChange, placeholder, value, error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={styles.text_input}
          data-testid={testId}
        />
        <span className={styles.focus_border} />
      </div>
      {error && (
        <span className={styles.error} data-testid={testId + "-error"}>
          {error}
        </span>
      )}
    </div>
  );
};

export default TextInput;
