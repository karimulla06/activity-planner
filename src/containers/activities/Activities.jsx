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
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getActivities(participants.length);
        setActivities(data);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [participants.length, fetchAgain]);

  function handleDelete(participant) {
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
        handleDelete={handleDelete}
        testId="participants-list"
      />
      <span className={styles.horizontal_divider} />
      <div>
        <ActivitiesList
          title={"Activities"}
          data={activities}
          loading={isLoading}
          testId="activities-list"
        />
        {!isLoading && (
          <StyledButton
            label={"I want more Activity suggestions!"}
            type="outlined"
            onClick={toggleFetchAgain}
            testId="refetch-activities"
          />
        )}
      </div>
    </div>
  );
};

export default Activities;
