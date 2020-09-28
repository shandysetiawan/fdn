import React from "react";
import styles from "../styles/mrBanner.module.css";

const MrBanner = (props) => {
  return (
    <div className={`${styles.mrBannerContainer} ${props.style}`}>
      <p>MR 2</p>
      <p>300x250</p>;
    </div>
  );
};

export default MrBanner;
