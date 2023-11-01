import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ActivitiesList, ParticipantsList, StyledButton } from "components";
import { getActivities } from "./getActivities";
import { translationKeys } from "content/translationKeys";
import styles from "./activities.module.css";

Activities.propTypes = {
  participants: PropTypes.array,
  handleCancel: PropTypes.func,
  removeParticipant: PropTypes.func,
};

function Activities({ participants, handleCancel, removeParticipant }) {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchAgain, setFetchAgain] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getActivities(participants.length);
        setActivities(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchData();
  }, [participants.length, fetchAgain]);

  function toggleFetchAgain() {
    setFetchAgain((f) => !f);
  }

  return (
    <div className={styles.container}>
      <ParticipantsList
        data={participants}
        title={translationKeys.participants}
        handleDelete={removeParticipant}
        testId="participants-list"
      />
      <span className={styles.horizontal_divider} />
      <div className={styles.activities_conatiner}>
        <ActivitiesList
          title={translationKeys.activities}
          data={activities}
          loading={isLoading}
          testId="activities-list"
        />
        {!isLoading && (
          <div className={styles.buttons_conatiner}>
            <StyledButton
              label={translationKeys.restart}
              type="outlined"
              onClick={handleCancel}
              testId="refetch-activities-restart"
            />
            <StyledButton
              label={translationKeys.more_suggestions}
              type="outlined"
              onClick={toggleFetchAgain}
              testId="refetch-activities-more"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Activities;
