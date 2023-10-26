import styles from "./activities-list.module.css";

const ActivitiesList = ({ loading, title, data = [] }) => {
  return (
    <div className={styles.conatiner}>
      {title && <span className={styles.title}>{title}</span>}
      {loading || data.length === 0 ? (
        <>
          <div
            className={`animated_shimmer ${styles.loading_div} ${styles.w80}`}
          />
          <div
            className={`animated_shimmer ${styles.loading_div} ${styles.w50}`}
          />
          <div className={`animated_shimmer ${styles.loading_div}`} />
        </>
      ) : (
        <ul>
          {data.map((a) => (
            <li key={a.key}>
              {a.activity}
              {" - "}
              <strong>{`$${a.price}`}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivitiesList;
