import { useReducer } from "react";
import PropTypes from "prop-types";
import { StyledButton, TextInput } from "components";
import { ACTIONS, getInitialState, reducer } from "./store";
import { translationKeys } from "content/translationKeys";
import styles from "./participants-details-form.module.css";

ParticipantsDetailsForm.propTypes = {
  numberOfParticipants: PropTypes.number.isRequired,
  setParticipants: PropTypes.func.isRequired,
};

function ParticipantsDetailsForm({ numberOfParticipants, setParticipants }) {
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
        {translationKeys.number_of_participants}
        <strong>{numberOfParticipants}</strong>
      </p>
      <div className={styles.inputs_container}>
        {Object.keys(participantsDetails).map((key) => (
          <TextInput
            key={key}
            placeholder={translationKeys.participant + key}
            value={participantsDetails[key].name}
            handleChange={(e) => handleInputChange(e, key)}
            error={participantsDetails[key].error}
          />
        ))}
      </div>
      <div className={styles.submit_btn}>
        <StyledButton
          label={translationKeys.submit}
          disabled={isSubmitDisabled}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default ParticipantsDetailsForm;
