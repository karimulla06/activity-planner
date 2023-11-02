import PropTypes from "prop-types";
import { NumberInput } from "components";
import ParticipantsDetailsForm from "containers/participants-details-form";
import { translationKeys } from "content/translationKeys";

ParticipantsDetailsForm.propTypes = {
  numberOfParticipants: PropTypes.number,
  saveNumberOfParticipants: PropTypes.func,
  saveParticipantsDetails: PropTypes.func,
  handleCancel: PropTypes.func,
};

function ParticipantsForm({
  numberOfParticipants,
  saveNumberOfParticipants,
  saveParticipantsDetails,
  handleCancel,
}) {
  return (
    <>
      {numberOfParticipants ? (
        <ParticipantsDetailsForm
          numberOfParticipants={numberOfParticipants}
          handleCancel={handleCancel}
          saveParticipantsDetails={saveParticipantsDetails}
        />
      ) : (
        <NumberInput
          label={translationKeys.select_number_of_participants}
          testId="select-number-of-participants"
          defaultValue={1}
          min={1}
          max={5}
          handleSubmit={saveNumberOfParticipants}
        />
      )}
    </>
  );
}

export default ParticipantsForm;
