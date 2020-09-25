import React from "react";
import styles from "../styles/billboard.module.css";

const Billboard = () => {
  return (
    <div className={styles.bodyBillboard}>
      <div className={styles.billboardContainer}>
        <p>Billboard 970x250</p>
      </div>
    </div>
  );
};

export default Billboard;
