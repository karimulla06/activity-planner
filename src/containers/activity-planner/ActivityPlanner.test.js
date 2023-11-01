import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActivityPlanner from "./ActivityPlanner";

jest.mock("containers/participants-form", () => ({
  __esModule: true,
  default: ({
    saveNumberOfParticipants,
    saveParticipantsDetails,
    handleCancel,
  }) => (
    <div>
      <p> Participants Form</p>
      <button
        data-testid="save-number-of-participants"
        onClick={() => saveNumberOfParticipants(2)}
      >
        Save Number Of Participants
      </button>
      <button
        data-testid="save-participants-details"
        onClick={() => saveParticipantsDetails(["Jhon", "Jane"])}
      >
        Save Participants Details
      </button>
      <button
        data-testid="cancel-participants-form"
        onClick={() => handleCancel()}
      >
        Cancel
      </button>
    </div>
  ),
}));

jest.mock("containers/activities", () => ({
  __esModule: true,
  default: ({ removeParticipant, participants }) => (
    <div>
      <p>Activities List</p>

      {participants.map((p) => (
        <button key={p} onClick={() => removeParticipant(p)}>
          {p}
        </button>
      ))}
    </div>
  ),
}));

describe("ActivityPlanner Component", () => {
  it("renders Participants form and Activities List", async () => {
    render(<ActivityPlanner />);
    const title = screen.getByText("Activity Planner");
    expect(title).toBeInTheDocument();

    const saveNumberOfParticipantsButton = screen.getByTestId(
      "save-number-of-participants"
    );
    userEvent.click(saveNumberOfParticipantsButton);

    const saveParticipantsButton = screen.getByTestId(
      "save-participants-details"
    );
    userEvent.click(saveParticipantsButton);

    const activitiesList = await screen.findByText("Activities List");
    expect(activitiesList).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: "Jhon" }));
    userEvent.click(screen.getByRole("button", { name: "Jane" }));
    const participantsForm = await screen.findByText("Participants Form");
    expect(participantsForm).toBeInTheDocument();
  });
});
