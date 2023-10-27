import { useReducer } from "react";
import { StyledButton, TextInput } from "components";
import { ACTIONS, getInitialState, reducer } from "./store";
import styles from "./participants-details-form.module.css";

const ParticipantsDetailsForm = ({ numberOfParticipants, setParticipants }) => {
  const [{ participantsDetails, isSubmitDisabled }, dispatch] = useReducer(
    reducer,
    getInitialState(numberOfParticipants)
  );
  function handleInputChange(event, key) {
    dispatch({
      type: ACTIONS.UPDATE_NAME,
      payload: {
        key,
        name: event.target.value,
      },
    });
  }
  function handleSubmit() {
    const participantsArr = Object.values(participantsDetails).map(
      (p) => p.name
    );
    setParticipants(participantsArr);
  }
  return (
    <div className={styles.container}>
      <p>
        No. of Participants: <strong>{numberOfParticipants}</strong>
      </p>
      <div className={styles.inputs_container}>
        {Object.keys(participantsDetails).map((key) => (
          <TextInput
            key={key}
            placeholder={"Participant " + key}
            value={participantsDetails[key].name}
            handleChange={(e) => handleInputChange(e, key)}
            error={participantsDetails[key].error}
          />
        ))}
      </div>
      <div className={styles.submit_btn}>
        <StyledButton
          label={"Submit"}
          disabled={isSubmitDisabled}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ParticipantsDetailsForm;
