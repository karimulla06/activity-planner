import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ParticipantsList from "./ParticipantsList";

describe("ParticipantsList Component", () => {
  const data = ["John Doe", "Jane Smith"];
  const title = "Participants";
  const testId = "test";

  it("renders the title correctly", () => {
    render(<ParticipantsList data={data} title={title} testId={testId} />);
    const titleElement = screen.getByTestId(`${testId}-title`);
    expect(titleElement).toHaveTextContent(title);
  });

  it("renders participant names correctly", () => {
    render(<ParticipantsList data={data} testId={testId} />);
    data.forEach((participant, index) => {
      const nameElement = screen.getByTestId(
        `${testId}-participant-${index + 1}-name`
      );
      expect(nameElement).toHaveTextContent(participant);
    });
  });

  it("calls handleDelete function with the correct participant when delete button is clicked", () => {
    const handleDelete = jest.fn();
    render(
      <ParticipantsList
        data={data}
        handleDelete={handleDelete}
        testId={testId}
      />
    );
    const deleteButton = screen.getByTestId(
      `${testId}-participant-1-delete-button`
    );

    userEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledWith(data[0]);
  });
});
