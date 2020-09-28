import React from "react";
import styles from "../styles/popularGroups.module.css";

const popularGroup = () => {
  return (
    <div className={styles.bodyPopular}>
      <div className={styles.headTitle}>
        <div>
          <h2>Popular Groups</h2>
          <p>Where the beauty TALK are</p>
        </div>
        <div>
          <p>See More {">"} </p>
        </div>
      </div>
      <div className={styles.bodyContent}>
        <div className={styles.cardContainer}>
          <div className={styles.cardDeck}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default popularGroup;
