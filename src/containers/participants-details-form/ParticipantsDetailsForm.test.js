import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ParticipantsDetailsForm from "./ParticipantsDetailsForm";

describe("ParticipantsDetailsForm component", () => {
  it("should render the correct number of input fields", () => {
    render(<ParticipantsDetailsForm numberOfParticipants={3} />);
    const inputFields = screen.getAllByRole("textbox");
    expect(inputFields).toHaveLength(3);
  });

  it("should update input values correctly", () => {
    render(<ParticipantsDetailsForm numberOfParticipants={2} />);
    const inputs = screen.getAllByRole("textbox");
    userEvent.type(inputs[0], "John Doe");
    userEvent.type(inputs[1], "Jane Doe");
    expect(inputs[0]).toHaveValue("John Doe");
    expect(inputs[1]).toHaveValue("Jane Doe");
  });

  it("should call setParticipants with correct values on form submission", () => {
    const setParticipantsMock = jest.fn();
    render(
      <ParticipantsDetailsForm
        numberOfParticipants={2}
        setParticipants={setParticipantsMock}
      />
    );

    const inputs = screen.getAllByRole("textbox");
    userEvent.type(inputs[0], "John Doe");
    userEvent.type(inputs[1], "Jane Doe");
    userEvent.click(screen.getByRole("button"));

    expect(setParticipantsMock).toHaveBeenCalledWith(["John Doe", "Jane Doe"]);
  });
});
