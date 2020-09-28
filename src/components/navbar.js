import React from "react";
import HeadBar from "./headbar";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <HeadBar></HeadBar>
      <nav className={styles.navbarContainer}>
        <ul className={styles.listItems}>
          <li>
            <a href="localhost:3000" className={styles.item}>
              SKINCARE
            </a>
          </li>
          <li>
            <a href="localhost:3000" className={styles.item}>
              MAKE UP
            </a>
          </li>
          <li>
            <a href="localhost:3000" className={styles.item}>
              BODY
            </a>
          </li>
          <li>
            <a href="localhost:3000" className={styles.item}>
              HAIR
            </a>
          </li>
          <li>
            <a href="localhost:3000" className={styles.item}>
              FRAGRANCE
            </a>
          </li>
          <li>
            <a href="localhost:3000" className={styles.item}>
              NAILS
            </a>
          </li>
          <li>
            <a href="localhost:3000" className={styles.item}>
              TOOLS
            </a>
          </li>
          <li>
            <a href="localhost:3000" className={styles.item}>
              BRANDS
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
