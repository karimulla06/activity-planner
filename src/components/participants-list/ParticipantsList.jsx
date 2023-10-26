import styles from "./participants-list.module.css";

const ParticipantsList = ({ data = [], title, handleClose }) => {
  return (
    <div className={styles.container}>
      {title && <span className={styles.title}>{title}</span>}
      <div className={styles.list_container}>
        {data.map((participant) => (
          <div key={participant} className={styles.participant_container}>
            <span>{participant}</span>
            <span
              className={styles.btn}
              onClick={() => handleClose(participant)}
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
