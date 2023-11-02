import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ParticipantsForm from "./ParticipantsForm";

jest.mock("containers/participants-details-form", () => ({
  __esModule: true,
  default: ({ handleCancel, saveParticipantsDetails }) => (
    <div>
      <p>Participants Details Form</p>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={() => saveParticipantsDetails(["p1", "p2"])}>
        Save
      </button>
    </div>
  ),
}));

jest.mock("components", () => ({
  __esModule: true,
  NumberInput: ({ handleSubmit }) => (
    <div>
      <p>Number Input</p>
      <button onClick={() => handleSubmit(1)}>Submit</button>
    </div>
  ),
}));

describe("ParticipantsForm Component", () => {
  it("renders NumberInput and then ParticipantsDetailsForm on submit", () => {
    const mockSetParticipants = jest.fn();
    render(<ParticipantsForm setParticipants={mockSetParticipants} />);

    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();

    userEvent.click(submitButton);
    expect(screen.getByText("Participants Details Form")).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    userEvent.click(cancelButton);
    expect(mockSetParticipants).toHaveBeenCalledWith([]);

    const saveButton = screen.getByRole("button", { name: "Save" });
    userEvent.click(saveButton);
    expect(mockSetParticipants).toHaveBeenCalledWith(["p1", "p2"]);
  });
});
