import React from "react";
import playstoreLogo from "../assets/images/playStoreLogo.png";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.bodyFooter}>
      <div className={styles.leftFooter}>
        <ul>
          <li>
            <a href="localhost:3000">About Us</a>
          </li>
          <li>
            <a href="localhost:3000">Feedback</a>
          </li>
          <li>
            <a href="localhost:3000">About Us</a>
          </li>
        </ul>
      </div>
      <div className={styles.middleFooter}>
        <ul>
          <li>
            <a href="localhost:3000">Terms and Condition</a>
          </li>
          <li>
            <a href="localhost:3000">Privacy Policy</a>
          </li>
          <li>
            <a href="localhost:3000">Help</a>
          </li>
        </ul>
      </div>
      <div className={styles.midFooter}>
        <ul>
          <li>
            <a href="localhost:3000">Awards</a>
          </li>
          <li>
            <a href="localhost:3000">Newsletter</a>
          </li>
        </ul>
      </div>
      <div className={styles.rightFooter}>
        <p>Download Our Mobile Apps</p>
        <img src={playstoreLogo} alt="playstore logo"></img>
      </div>
    </div>
  );
};

export default Footer;
