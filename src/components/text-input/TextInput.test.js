import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./TextInput";

describe("TextInput Component", () => {
  const testId = "text-input";
  it("renders input correctly", () => {
    render(<TextInput />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls handleChange prop on input change", () => {
    const handleChange = jest.fn();
    render(<TextInput handleChange={handleChange} testId={testId} />);
    const inputElement = screen.getByTestId(testId);
    userEvent.type(inputElement, "test");
    expect(handleChange).toHaveBeenCalled();
  });

  it("renders placeholder correctly", () => {
    render(<TextInput placeholder="Enter text here" testId={testId} />);
    const inputElement = screen.getByPlaceholderText("Enter text here");
    expect(inputElement).toBeInTheDocument();
  });

  it("displays error message when error prop is provided", () => {
    render(<TextInput error="This field is required" testId={testId} />);
    const errorElement = screen.getByTestId(testId + "-error");
    expect(errorElement).toBeInTheDocument();
  });

  it("does not display error message when error prop is not provided", () => {
    render(<TextInput />);
    expect(screen.queryByTestId(testId + "-error")).toBeNull();
  });
});
