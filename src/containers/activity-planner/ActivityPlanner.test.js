import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActivityPlanner from "./ActivityPlanner";

jest.mock("containers/participants-form", () => ({
  __esModule: true,
  default: ({ setParticipants }) => (
    <button onClick={() => setParticipants(["Jhon"])}>Participants Form</button>
  ),
}));

jest.mock("containers/activities", () => ({
  __esModule: true,
  default: () => <p>Activities List</p>,
}));

describe("ActivityPlanner Component", () => {
  it("renders Participants form and Activities List", async () => {
    render(<ActivityPlanner />);
    const title = screen.getByText("Activity Planner");
    expect(title).toBeInTheDocument();

    const participantsFormButton = screen.getByRole("button");
    userEvent.click(participantsFormButton);

    const activitiesList = await screen.findByText("Activities List");
    expect(activitiesList).toBeInTheDocument();
  });
});
