import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ParticipantsDetailsForm from "./ParticipantsDetailsForm";

describe("ParticipantsDetailsForm component", () => {
  const mockHandleCancel = jest.fn();
  const mockSaveParticipantsDetails = jest.fn();

  const props = {
    numberOfParticipants: 2,
    handleCancel: mockHandleCancel,
    saveParticipantsDetails: mockSaveParticipantsDetails,
  };

  it("should render the correct number of input fields", () => {
    render(<ParticipantsDetailsForm {...props} />);
    const inputFields = screen.getAllByRole("textbox");
    expect(inputFields).toHaveLength(2);
  });

  it("should update input values correctly", () => {
    render(<ParticipantsDetailsForm {...props} />);
    const inputs = screen.getAllByRole("textbox");
    userEvent.type(inputs[0], "John Doe");
    userEvent.type(inputs[1], "Jane Doe");
    expect(inputs[0]).toHaveValue("John Doe");
    expect(inputs[1]).toHaveValue("Jane Doe");
  });

  it("should call setParticipants with correct values on form submission", () => {
    render(<ParticipantsDetailsForm {...props} />);

    const inputs = screen.getAllByRole("textbox");
    userEvent.type(inputs[0], "John Doe");
    userEvent.type(inputs[1], "Jane Doe");
    userEvent.click(screen.getByTestId("participant-details-submit-button"));

    expect(mockSaveParticipantsDetails).toHaveBeenCalledWith([
      "John Doe",
      "Jane Doe",
    ]);
  });
});
