import React from "react";
import styles from "../styles/latestVideos.module.css";
import leftVideo from "../assets/images/video.png";

const LatestVideos = () => {
  return (
    <div className={styles.bodyLatestVid}>
      <div className={styles.headTitle}>
        <div>
          <h2>Latest Videos</h2>
          <p>Watch and learn ladies</p>
        </div>
        <div>
          <p>See More {">"} </p>
        </div>
      </div>
      <div className={styles.videosContent}>
        <div className={styles.leftVideo}>
          <img src={leftVideo} alt="" className={styles.leftImage}></img>
        </div>
        <div className={styles.rightVideo}>
          <img src={leftVideo} alt="" className={styles.rightImage}></img>
          <img src={leftVideo} alt="" className={styles.rightImage}></img>
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
