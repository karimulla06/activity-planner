import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ParticipantsForm from "./ParticipantsForm";
import userEvent from "@testing-library/user-event";

describe("ParticipantsForm Component", () => {
  it("renders NumberInput when numberOfParticipants is not defined", () => {
    render(<ParticipantsForm />);
    expect(
      screen.getByTestId("select-number-of-participants")
    ).toBeInTheDocument();
  });

  it("renders ParticipantsDetailsForm when numberOfParticipants is defined", () => {
    render(<ParticipantsForm numberOfParticipants={3} />);
    expect(screen.getByText("No. of Participants:")).toBeInTheDocument();
  });

  it("calls saveNumberOfParticipants when NumberInput is submitted", () => {
    const saveNumberOfParticipants = jest.fn();
    render(
      <ParticipantsForm saveNumberOfParticipants={saveNumberOfParticipants} />
    );
    userEvent.click(
      screen.getByTestId("select-number-of-participants-submit-button")
    );
    expect(saveNumberOfParticipants).toHaveBeenCalled();
  });

  it("calls handleCancel when ParticipantsDetailsForm is canceled", () => {
    const handleCancel = jest.fn();
    render(
      <ParticipantsForm numberOfParticipants={3} handleCancel={handleCancel} />
    );
    userEvent.click(screen.getByText("Cancel"));
    expect(handleCancel).toHaveBeenCalled();
  });

  it("calls saveParticipantsDetails when ParticipantsDetailsForm is submitted", () => {
    const saveParticipantsDetails = jest.fn();
    render(
      <ParticipantsForm
        numberOfParticipants={1}
        saveParticipantsDetails={saveParticipantsDetails}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "test");
    userEvent.click(screen.getByText("Submit"));
    expect(saveParticipantsDetails).toHaveBeenCalled();
  });
});
