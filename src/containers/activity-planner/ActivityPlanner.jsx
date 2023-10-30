import { useLocalState } from "hooks";
import Activities from "containers/activities";
import ParticipantsForm from "containers/participants-form";
import { translationKeys } from "content/translationKeys";
import styles from "./activity-planner.module.css";

const ActivityPlanner = () => {
  const [participants, setParticipants] = useLocalState("participants", []);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{translationKeys.activity_planner}</h2>
      {participants.length === 0 ? (
        <ParticipantsForm setParticipants={setParticipants} />
      ) : (
        <Activities
          participants={participants}
          setParticipants={setParticipants}
        />
      )}
    </div>
  );
};

export default ActivityPlanner;
