import React from "react";
import styles from "../styles/trending.module.css";

const Trending = () => {
  return (
    <div className={styles.bodyTrending}>
      <div className={styles.headTitle}>
        <div>
          <h2>Trending This Week</h2>
          <p>See our weekly most reviewed products</p>
        </div>
      </div>
      <div className={styles.trendingContent}>
        <div className={styles.cardContainer}>
          <div className={styles.cardDeck}>
            <div className={styles.card}>
              <div className={styles.cardContent}></div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}></div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}></div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}></div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
