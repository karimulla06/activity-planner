import PropTypes from "prop-types";
import { NumberInput } from "components";
import ParticipantsDetailsForm from "containers/participants-details-form";
import { translationKeys } from "content/translationKeys";
import { useLocalState } from "hooks";

ParticipantsForm.propTypes = {
  setParticipants: PropTypes.func.isRequired,
};

function ParticipantsForm({ setParticipants }) {
  const [numberOfParticipants, setNumberOfParticipants] = useLocalState(
    "numberOfParticipants",
    0,
    true
  );

  const handleCancel = () => {
    setNumberOfParticipants(0);
    setParticipants([]);
  };

  return (
    <>
      {numberOfParticipants ? (
        <ParticipantsDetailsForm
          numberOfParticipants={numberOfParticipants}
          handleCancel={handleCancel}
          saveParticipantsDetails={(data) => setParticipants(data)}
        />
      ) : (
        <NumberInput
          label={translationKeys.select_number_of_participants}
          testId="select-number-of-participants"
          defaultValue={1}
          min={1}
          max={5}
          handleSubmit={setNumberOfParticipants}
        />
      )}
    </>
  );
}

export default ParticipantsForm;
