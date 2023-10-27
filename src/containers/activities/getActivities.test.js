import { getActivities } from "./getActivities";

describe("getActivities function", () => {
  const mockDataArray = [
    { key: "mockActivityKey1", price: "10" },
    { key: "mockActivityKey2", price: "15" },
    { key: "mockActivityKey2", price: "15" },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockDataArray.shift()),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it("should return a list of activities with the specified number of participants", async () => {
    const activities = await getActivities(2);
    const expectedActivites = [
      { key: "mockActivityKey1", price: "10" },
      { key: "mockActivityKey2", price: "15" },
    ];

    expect(activities).toHaveLength(2);
    expect(activities).toEqual(expectedActivites);
  });
});
