import styles from "./participants-list.module.css";

const ParticipantsList = ({ data, title, handleDelete, testId }) => {
  return (
    <div className={styles.container}>
      {title && (
        <span className={styles.title} data-testid={testId + "-title"}>
          {title}
        </span>
      )}
      <div className={styles.list_container}>
        {data?.map((participant, index) => (
          <div key={participant} className={styles.participant_container}>
            <span data-testid={`${testId}-participant-${index + 1}-name`}>
              {participant}
            </span>
            <span
              className={styles.btn}
              onClick={() => handleDelete(participant)}
              data-testid={`${testId}-participant-${index + 1}-delete-button`}
            >
              x
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantsList;
