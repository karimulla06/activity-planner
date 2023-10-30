import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StyledButton from "./StyledButton";

describe("StyledButton Component", () => {
  const testId = "styled-button";
  it("renders button correctly", () => {
    render(<StyledButton label="Click Me" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick prop when clicked", () => {
    const onClick = jest.fn();
    render(<StyledButton label="Click Me" onClick={onClick} testId={testId} />);
    const buttonElement = screen.getByTestId(testId);
    userEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });

  it("disables button when disabled prop is true", () => {
    render(<StyledButton label="Click Me" disabled testId={testId} />);
    const buttonElement = screen.getByTestId(testId);
    expect(buttonElement).toBeDisabled();
  });

  it("applies outlined style when type prop is 'outlined'", () => {
    render(<StyledButton label="Click Me" type="outlined" testId={testId} />);
    const buttonElement = screen.getByTestId(testId);
    expect(buttonElement).toHaveClass("btn_outlined");
  });
});
