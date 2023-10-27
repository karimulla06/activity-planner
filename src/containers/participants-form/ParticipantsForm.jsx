import { useState } from "react";
import { NumberInput } from "components";
import ParticipantsDetailsForm from "containers/participants-details-form";

const ParticipantsForm = ({ setParticipants }) => {
  const [numberOfParticipants, setNumberOfParticipants] = useState();
  return (
    <div>
      {numberOfParticipants ? (
        <ParticipantsDetailsForm
          numberOfParticipants={numberOfParticipants}
          setParticipants={setParticipants}
        />
      ) : (
        <NumberInput
          label={"Select Number of Participants:"}
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
