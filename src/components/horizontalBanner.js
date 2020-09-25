import React from "react";
import styles from "../styles/horizontalBanner.module.css";

const HorizontalFrame = () => {
  return (
    <div className={styles.bodyBanner}>
      <div className={styles.horizontalBannerContainer}>
        <p>Horizontal Frame 970x250</p>
        <p>Internal Campaign Only</p>
      </div>
    </div>
  );
};

export default HorizontalFrame;
