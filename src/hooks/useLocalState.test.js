import { renderHook, act } from "@testing-library/react";
import useLocalState from "./useLocalState";

describe("useLocalState hook", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("returns initial value when localStorage is empty", () => {
    const { result } = renderHook(() =>
      useLocalState("testKey", "initialValue")
    );
    expect(result.current[0]).toBe("initialValue");
  });

  it("returns value from localStorage when available", () => {
    const testValue = { data: "testData" };
    localStorage.setItem("testKey", JSON.stringify(testValue));
    const { result } = renderHook(() =>
      useLocalState("testKey", "initialValue")
    );
    expect(result.current[0]).toEqual(testValue);
  });

  it("returns initial value if error parsing JSON data from localStorage", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    localStorage.setItem("testKey", "invalidJSON");
    const { result } = renderHook(() =>
      useLocalState("testKey", () => "initialValue")
    );
    expect(result.current[0]).toBe("initialValue");
    console.error.mockRestore();
  });

  it("updates localStorage with new value when setState is called", () => {
    const { result } = renderHook(() =>
      useLocalState("testKey", "initialValue")
    );
    act(() => {
      result.current[1]("updatedValue");
    });
    expect(localStorage.getItem("testKey")).toBe(
      JSON.stringify("updatedValue")
    );
  });
});
