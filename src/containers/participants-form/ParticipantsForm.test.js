import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ParticipantsForm from "./ParticipantsForm";

describe("ParticipantsForm", () => {
  it("renders with the NumberInput component initially", () => {
    const setParticipants = jest.fn();
    render(<ParticipantsForm setParticipants={setParticipants} />);
    expect(
      screen.getByTestId("select-number-of-participants")
    ).toBeInTheDocument();
  });

  it("renders ParticipantsDetailsForm component when the number of participants is selected", () => {
    const setParticipants = jest.fn();
    render(<ParticipantsForm setParticipants={setParticipants} />);

    const submitButton = screen.getByTestId(
      "select-number-of-participants-submit-button"
    );

    userEvent.click(submitButton);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
