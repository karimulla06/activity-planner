import { useEffect, useState } from "react";
import {
  ActivitiesList,
  ParticipantsList,
  StyledButton,
} from "../../components";
import { getActivities } from "./getActivities";
import styles from "./activities.module.css";

const Activities = ({ participants, setParticipants }) => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchAgain, setFetchAgain] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getActivities(participants.length)
      .then((a) => {
        setActivities(a);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, [participants.length, fetchAgain]);

  function handleClose(participant) {
    setParticipants(participants.filter((p) => p !== participant));
  }

  function toggleFetchAgain() {
    setFetchAgain((f) => !f);
  }

  return (
    <div className={styles.container}>
      <ParticipantsList
        data={participants}
        title={"Participants"}
        handleClose={handleClose}
      />
      <span className={styles.horizontal_divider} />
      <div>
        <ActivitiesList
          title={"Activities"}
          data={activities}
          loading={isLoading}
        />
        {!isLoading && (
          <StyledButton
            label={"I want more Activity suggestions!"}
            type="outlined"
            onClick={toggleFetchAgain}
          />
        )}
      </div>
    </div>
  );
};

export default Activities;
