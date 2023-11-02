import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getActivities } from "./getActivities";
import Activities from "./Activities";

jest.mock("./getActivities", () => ({
  __esModule: true,
  getActivities: jest.fn(() =>
    Promise.resolve([{ key: "1", activity: "activity", price: "0" }])
  ),
}));

describe("Activities component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockSetParticipants = jest.fn();

  const renderActivities = (participants = ["Participant1"]) => {
    render(
      <Activities
        participants={participants}
        setParticipants={mockSetParticipants}
      />
    );
  };

  it("renders ParticipantsList and ActivitiesList", async () => {
    renderActivities();
    const participantsTitle = await screen.findByText("Participants");
    const activitiesTitle = await screen.findByText("Activities");

    expect(participantsTitle).toBeInTheDocument();
    expect(activitiesTitle).toBeInTheDocument();
  });

  it("handles participant deletion", async () => {
    renderActivities(["Participant1", "Participant2"]);
    const deleteButton = await screen.findByTestId(
      "participants-list-participant-1-delete-button"
    );
    userEvent.click(deleteButton);
    expect(mockSetParticipants).toHaveBeenCalledWith(["Participant2"]);
  });

  it("handles participant deletion and resets the participants", async () => {
    renderActivities();
    const deleteButton = await screen.findByTestId(
      "participants-list-participant-1-delete-button"
    );
    userEvent.click(deleteButton);
    expect(mockSetParticipants).toHaveBeenCalledWith([]);
  });

  it("toggles fetching activities", async () => {
    renderActivities();
    const toggleButton = await screen.findByTestId("refetch-activities-more");
    expect(toggleButton).toBeInTheDocument();

    userEvent.click(toggleButton);
    await waitFor(() => {
      expect(getActivities).toHaveBeenCalled();
    });
  });

  it("handles error in fetching activities", async () => {
    const mockError = new Error("Failed to fetch activities");
    getActivities.mockImplementationOnce(() => {
      throw mockError;
    });

    jest.spyOn(console, "error").mockImplementation(() => {});
    renderActivities();

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(mockError.message);
    });
    console.error.mockRestore();
  });
});
