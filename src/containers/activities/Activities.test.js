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
  const mockParticipants = ["Participant1", "Participant2"];
  const mockSetParticipants = jest.fn();

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders ParticipantsList and ActivitiesList", async () => {
    render(
      <Activities
        participants={mockParticipants}
        setParticipants={mockSetParticipants}
      />
    );
    const participantsTitle = await screen.findByText("Participants");
    const activitiesTitle = await screen.findByText("Activities");

    expect(participantsTitle).toBeInTheDocument();
    expect(activitiesTitle).toBeInTheDocument();
  });

  it("handles participant deletion", async () => {
    render(
      <Activities
        participants={mockParticipants}
        setParticipants={mockSetParticipants}
      />
    );
    const deleteButton = await screen.findByTestId(
      "participants-list-participant-1-delete-button"
    );
    userEvent.click(deleteButton);

    expect(mockSetParticipants).toHaveBeenCalledWith(["Participant2"]);
  });

  it("toggles fetching activities", async () => {
    render(
      <Activities
        participants={mockParticipants}
        setParticipants={mockSetParticipants}
      />
    );
    const toggleButton = await screen.findByTestId("refetch-activities");
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

    console.error = jest.fn();
    render(
      <Activities
        participants={mockParticipants}
        setParticipants={mockSetParticipants}
      />
    );

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(mockError.message);
    });
  });
});
