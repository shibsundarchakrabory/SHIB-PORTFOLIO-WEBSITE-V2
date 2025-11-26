import React from "react";

import styles from "./corosail.module.css";

function Corosail() {
  return (
    <div className={styles.corosailBody}>
      <div className={styles.group}>
        <div className={styles.card}>1</div>
        <div className={styles.card}>2</div>
        <div className={styles.card}>3</div>
        <div className={styles.card}>4</div>
        <div className={styles.card}>5</div>
        <div className={styles.card}>6</div>
      </div>
      <div aria-hidden className={styles.group}>
        <div className={styles.card}>1</div>
        <div className={styles.card}>2</div>
        <div className={styles.card}>3</div>
        <div className={styles.card}>4</div>
        <div className={styles.card}>5</div>
        <div className={styles.card}>6</div>
      </div>
    </div>
  );
}

export default Corosail;
