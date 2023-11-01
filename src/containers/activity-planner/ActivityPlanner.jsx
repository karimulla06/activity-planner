import { useLocalState } from "hooks";
import Activities from "containers/activities";
import ParticipantsForm from "containers/participants-form";
import { translationKeys } from "content/translationKeys";
import { storageKeys } from "content/constants";
import styles from "./activity-planner.module.css";

const ActivityPlanner = () => {
  const [numberOfParticipants, setNumberOfParticipants] = useLocalState(
    storageKeys.numberOfParticipants,
    null
  );
  const [participants, setParticipants] = useLocalState(
    storageKeys.participants,
    []
  );

  function saveNumberOfParticipants(number) {
    setNumberOfParticipants(number);
  }

  function handleCancel() {
    setNumberOfParticipants(null);
    setParticipants([]);
  }

  function saveParticipantsDetails(data) {
    setParticipants(data);
  }

  function removeParticipant(name) {
    const filteredList = participants.filter((p) => p !== name);
    if (filteredList.length === 0) {
      handleCancel();
    } else {
      setParticipants(filteredList);
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{translationKeys.activity_planner}</h2>
      {participants.length === 0 ? (
        <ParticipantsForm
          numberOfParticipants={numberOfParticipants}
          saveNumberOfParticipants={saveNumberOfParticipants}
          saveParticipantsDetails={saveParticipantsDetails}
          handleCancel={handleCancel}
        />
      ) : (
        <Activities
          participants={participants}
          setParticipants={setParticipants}
          handleCancel={handleCancel}
          removeParticipant={removeParticipant}
        />
      )}
    </div>
  );
};

export default ActivityPlanner;
