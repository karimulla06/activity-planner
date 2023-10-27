import { generateArray, validateInput } from "./helpers";

describe("generateArray", () => {
  it("generates an array of specified length", () => {
    const result = generateArray(5);
    expect(result).toHaveLength(5);
  });

  it("generates an array with correct values", () => {
    const result = generateArray(3);
    expect(result).toEqual([1, 2, 3]);
  });
});

describe("validateInput", () => {
  const details = {
    1: { key: 1, name: "John Doe" },
    2: { key: 2, name: "Jane Smith" },
  };

  it("validates empty name correctly", () => {
    const result = validateInput("", 1, details);
    expect(result).toEqual("Name is required.");
  });

  it("validates name length correctly", () => {
    const result = validateInput("abcdefghijklmnopqrstuvwxyz", 1, details);
    expect(result).toEqual("Name exceeds 20 characters limit.");
  });

  it("validates name format correctly", () => {
    const result1 = validateInput("John123", 1, details);
    expect(result1).toEqual("No Numbers or Special Characters are allowed.");

    const result2 = validateInput("John@", 1, details);
    expect(result2).toEqual("No Numbers or Special Characters are allowed.");
  });

  it("validates duplicate name correctly", () => {
    const result = validateInput("John Doe", 2, details);
    expect(result).toEqual("Duplicate name found. Please use a unique name.");
  });

  it("returns empty string when input is valid", () => {
    const result = validateInput("Michael Johnson", 3, details);
    expect(result).toEqual("");
  });
});
