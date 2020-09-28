import React from "react";
import styles from "../styles/topBrand.module.css";
import brand from "../assets/images/brand.png";

const TopBrand = () => {
  return (
    <div className={styles.bodyBrand}>
      <div className={styles.headTitle}>
        <div>
          <h2>Top Brands</h2>
          <p>We all know and Love</p>
        </div>
        <div>
          <p>See More {">"} </p>
        </div>
      </div>
      <div className={styles.brandContent}>
        <div className={styles.brandLogos}>
          <img src={brand} alt="" className={styles.imgBrand}></img>
          <img src={brand} alt="" className={styles.imgBrand}></img>
          <img src={brand} alt="" className={styles.imgBrand}></img>
          <img src={brand} alt="" className={styles.imgBrand}></img>
          <img src={brand} alt="" className={styles.imgBrand}></img>
          <img src={brand} alt="" className={styles.imgBrand}></img>
        </div>
        <h3>
          Female Daily - Find everything you want to know about beauty on Female
          Daily
        </h3>
        <p>
          Product Review, Tips &amp; Tricks, Experts and Consumer Opinions,
          Beauty Tutorials, Discussions, Beauty Workshops, anything!
        </p>
        <p>
          We are here to be your friendly solution to all things beauty, inside
          and out!
        </p>
      </div>
    </div>
  );
};

export default TopBrand;
