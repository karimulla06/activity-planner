import { generateArray, validateInput } from "../../utils/helpers";

export const ACTIONS = {
  UPDATE_NAME: "UPDATE_NAME",
  RESET: "RESET",
};

export function reducer(state, action) {
  const {
    type,
    payload: { key, name },
  } = action;
  switch (type) {
    case ACTIONS.UPDATE_NAME: {
      const error = validateInput(name, key, state.participantsDetails);
      const updatedDetails = {
        ...state.participantsDetails,
        [key]: { ...state[key], name, error },
      };
      const isSubmitDisabled = Object.values(updatedDetails).some(
        (item) => item.name === "" || item.error !== ""
      );
      return { participantsDetails: updatedDetails, isSubmitDisabled };
    }
    case ACTIONS.RESET:
      return getInitialState(action.payload);
    default:
      return state;
  }
}

export function getInitialState(numberOfParticipants) {
  const arr = generateArray(numberOfParticipants);
  const participantsDetails = {};
  arr.forEach((p) => {
    participantsDetails[p] = { name: "", error: "" };
  });
  return { participantsDetails, isSubmitDisabled: true };
}
