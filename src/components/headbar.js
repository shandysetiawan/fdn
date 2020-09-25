import React from "react";
import Logo from "../assets/images/logo.png";
import styles from "../styles/headbar.module.css";

const Headbar = () => {
  return (
    <>
      <div className={styles.headbarContainer}>
        <span className="material-icons">menu</span>
        <img src={Logo}></img>
        <input
          type="text"
          placeholder="Search products, articles,topics, brands,etc"
          className={styles.inputHeadBar}
        ></input>
        <button className={styles.buttonLogin}>LOGIN/SIGNUP</button>
      </div>
    </>
  );
};

export default Headbar;
