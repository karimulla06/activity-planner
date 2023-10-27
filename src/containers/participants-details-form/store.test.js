import { ACTIONS, getInitialState, reducer } from "./store";

describe("reducer", () => {
  it("should handle update and reset actions", () => {
    const initialState = getInitialState(2);
    const action1 = {
      type: ACTIONS.UPDATE_NAME,
      payload: { key: "1", name: "John" },
    };
    const newState1 = reducer(initialState, action1);
    const updatedState1 = {
      participantsDetails: {
        1: { name: "John", error: "" },
        2: { name: "", error: "" },
      },
      isSubmitDisabled: true,
    };
    expect(newState1).toEqual(updatedState1);

    const action2 = {
      type: ACTIONS.UPDATE_NAME,
      payload: { key: "2", name: "Jane" },
    };
    const newState2 = reducer(updatedState1, action2);
    const updatedState2 = {
      participantsDetails: {
        1: { name: "John", error: "" },
        2: { name: "Jane", error: "" },
      },
      isSubmitDisabled: false,
    };
    expect(newState2).toEqual(updatedState2);

    const action3 = {
      type: ACTIONS.RESET,
    };
    const newState3 = reducer(updatedState2, action3);

    const updatedState3 = {
      participantsDetails: {},
      isSubmitDisabled: true,
    };
    expect(newState3).toEqual(updatedState3);
  });
  it("should return state without any changes if action type is not defined", () => {
    const initialState = getInitialState(2);
    const action = {};
    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});

describe("getInitialState", () => {
  it("should return initial state correctly", () => {
    const initialState = {
      participantsDetails: {
        1: { name: "", error: "" },
        2: { name: "", error: "" },
      },
      isSubmitDisabled: true,
    };
    expect(getInitialState(2)).toEqual(initialState);
  });
});
