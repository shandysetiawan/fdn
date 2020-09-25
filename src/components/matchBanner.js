import React from "react";
import LeftsideImage from "../assets/images/leftsideImage.png";
import styles from "../styles/matchBanner.module.css";

const MatchBanner = () => {
  return (
    <div className={styles.bodyBanner}>
      <div className={styles.matchContainer}>
        <img src={LeftsideImage}></img>
        <div className={styles.middleContent}>
          <p>Looking for products that are just simply perfect for you</p>
          <p>
            Here are some products that we believe match your skin, hair, and
            body! Have we mentioned that they solve your concern too?
          </p>
          <button className={styles.buttonMatches}>See My Matches</button>
        </div>
      </div>
    </div>
  );
};

export default MatchBanner;
