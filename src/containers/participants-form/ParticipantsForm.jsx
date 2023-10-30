import { useLocalState } from "hooks";
import { NumberInput } from "components";
import ParticipantsDetailsForm from "containers/participants-details-form";
import { translationKeys } from "content/translationKeys";

const ParticipantsForm = ({ setParticipants }) => {
  const [numberOfParticipants, setNumberOfParticipants] = useLocalState(
    "numberOfParticipants",
    null
  );

  function handleCancel() {
    setNumberOfParticipants(null);
  }

  return (
    <div>
      {numberOfParticipants ? (
        <ParticipantsDetailsForm
          numberOfParticipants={numberOfParticipants}
          handleCancel={handleCancel}
          setParticipants={setParticipants}
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
    </div>
  );
};

export default ParticipantsForm;
