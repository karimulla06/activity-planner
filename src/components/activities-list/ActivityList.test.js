import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActivitiesList from "./ActivitiesList";

describe("ActivitiesList Component", () => {
  const testId = "test";
  const data = [
    { key: 1, activity: "Hiking", price: 50 },
    { key: 2, activity: "Skiing", price: 100 },
    { key: 3, activity: "Swimming", price: 30 },
  ];

  it("renders title correctly", () => {
    const title = "Activities";
    render(<ActivitiesList title={title} data={data} testId={testId} />);
    const titleElement = screen.getByTestId(`${testId}-title`);
    expect(titleElement).toHaveTextContent(title);
  });

  it("renders loading state correctly", () => {
    render(<ActivitiesList loading={true} testId={testId} />);
    const loadingElement = screen.getByTestId(`${testId}-loading`);
    expect(loadingElement).toBeInTheDocument();
  });

  it("renders activities correctly when not in loading state", () => {
    render(<ActivitiesList data={data} testId={testId} />);
    data.forEach(({ activity, price }, index) => {
      const activityElement = screen.getByTestId(`${testId}-activity-${index}`);
      expect(activityElement).toHaveTextContent(`${activity} - $${price}`);
    });
  });
});
