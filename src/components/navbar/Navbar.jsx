import React from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "../../features/theme/ThemeToggle.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={`${styles.nav} animate__animated animate__fadeInDown`}>
      {/* <div className={styles.logo}>LOGO</div> */}
      <div className={`${styles.linkdiv} animate__animated animate__fadeInLeft animate__delay-1s`}>
        <Link className={styles.navlink} to="/">Home</Link>
        <Link className={styles.navlink} to="/Creations">Creations</Link>
        <Link className={styles.navlink} to="/about">About</Link>
        <Link className={styles.navlink} to="/contact">contact</Link>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default Navbar;
