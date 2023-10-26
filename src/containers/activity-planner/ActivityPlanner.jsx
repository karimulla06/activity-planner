import { useState } from "react";
import Activities from "../activities";
import ParticipantsForm from "../participants-form";
import styles from "./activity-planner.module.css";

const ActivityPlanner = () => {
  const [participants, setParticipants] = useState([]);
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
