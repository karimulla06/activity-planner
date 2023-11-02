import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActivityPlanner from "./ActivityPlanner";
import { translationKeys } from "content/translationKeys";

jest.mock("containers/participants-form", () => ({
  __esModule: true,
  default: ({ setParticipants }) => (
    <div>
      <p>Participants Form</p>
      <button onClick={() => setParticipants(["Jhon"])}>Submit</button>
    </div>
  ),
}));

jest.mock("containers/activities", () => ({
  __esModule: true,
  default: () => <p>Activities List</p>,
}));

describe("ActivityPlanner Component", () => {
  it("renders Participants form and then Activities List on submit", async () => {
    render(<ActivityPlanner />);
    const title = screen.getByText(translationKeys.activity_planner);
    expect(title).toBeInTheDocument();

    const participantsForm = screen.getByText("Participants Form");
    expect(participantsForm).toBeInTheDocument();

    const saveButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(saveButton);

    const activitiesList = await screen.findByText("Activities List");
    expect(activitiesList).toBeInTheDocument();
  });
});
