import styles from "./activities-list.module.css";

const ActivitiesList = ({ loading, title, data = [], testId }) => {
  return (
    <div className={styles.conatiner} data-testid={testId}>
      {title && (
        <span className={styles.title} data-testid={testId + "-title"}>
          {title}
        </span>
      )}
      {loading || data.length === 0 ? (
        <div className={styles.loading} data-testid={testId + "-loading"}>
          <div className="animated_shimmer" style={{ width: "80%" }} />
          <div className="animated_shimmer" style={{ width: "50%" }} />
          <div className="animated_shimmer" style={{ width: "100%" }} />
        </div>
      ) : (
        <ul>
          {data.map((a, i) => (
            <li key={a.key} data-testid={`${testId}-activity-${i}`}>
              {`${a.activity} - `}
              <strong>{`$${a.price}`}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivitiesList;