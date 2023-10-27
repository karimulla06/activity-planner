export function getTestIds(testId) {
  return {
    container: testId,
    label: testId + "-label",
    inputValue: testId + "-value",
    decrementButton: testId + "-decrement-button",
    incrementButton: testId + "-increment-button",
    submitButton: testId + "-submit-button",
  };
}
