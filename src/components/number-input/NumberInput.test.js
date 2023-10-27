import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getTestIds } from "./helpers";
import NumberInput from "./NumberInput";

describe("NumberInput Component", () => {
  const testId = "number-input";
  const testIds = getTestIds(testId);
  it("renders with default value", () => {
    render(<NumberInput testId={testId} />);

    const numberInputContainer = screen.getByTestId(testIds.container);
    expect(numberInputContainer).toBeInTheDocument();

    const inputValue = screen.getByTestId(testIds.inputValue);
    expect(inputValue).toBeInTheDocument();
    expect(inputValue.textContent).toBe("1");
  });

  it("increments value when the increment button is clicked", () => {
    render(<NumberInput testId={testId} />);
    const incrementButton = screen.getByTestId(testIds.incrementButton);
    userEvent.click(incrementButton);
    const inputValue = screen.getByText("2");
    expect(inputValue).toBeInTheDocument();
  });

  it("decrements value when the decrement button is clicked", () => {
    render(<NumberInput testId={testId} />);
    const decrementButton = screen.getByTestId(testIds.decrementButton);
    userEvent.click(decrementButton);
    const inputValue = screen.getByText("0");
    expect(inputValue).toBeInTheDocument();
  });

  it("disables increment button when the value is at max", () => {
    render(<NumberInput max={5} defaultValue={5} testId={testId} />);
    const incrementButton = screen.getByTestId(testIds.incrementButton);
    expect(incrementButton).toBeDisabled();
  });

  it("disables decrement button when the value is at min", () => {
    render(<NumberInput min={0} defaultValue={0} testId={testId} />);
    const decrementButton = screen.getByTestId(testIds.decrementButton);
    expect(decrementButton).toBeDisabled();
  });

  it("calls handleSubmit with the correct value when the submit button is clicked", () => {
    const handleSubmit = jest.fn();
    render(<NumberInput handleSubmit={handleSubmit} testId={testId} />);
    const submitButton = screen.getByTestId(testIds.submitButton);
    userEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledWith(1);
  });
});
