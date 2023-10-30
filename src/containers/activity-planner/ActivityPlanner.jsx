import Activities from "containers/activities";
import ParticipantsForm from "containers/participants-form";
import styles from "./activity-planner.module.css";
import { useLocalState } from "hooks";

const ActivityPlanner = () => {
  const [participants, setParticipants] = useLocalState("participants", []);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Activity Planner</h2>
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
