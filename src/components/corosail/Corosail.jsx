import React from "react";
import styles from "./corosail.module.css";
import next from "../../assets/NEXT.jpeg";
import python from "../../assets/python.png";
import html from "../../assets/html.png";
import css from "../../assets/css.jpeg";
import js from "../../assets/js.jpeg";
import react from "../../assets/react.png";
import expo from "../../assets/expo.png";

const images = [html, css, js, next, python, react, expo];

function Corosail() {
  const renderCards = () =>
    images.map((src, index) => (
      <div className={styles.card} key={index}>
        <img src={src} alt={`tech logo ${index + 1}`} />
      </div>
    ));

  return (
    <div className={styles.corosailBody}>
      <div className={styles.group}>{renderCards()}</div>
      <div aria-hidden="true" className={styles.group}>
        {renderCards()}
      </div>
    </div>
  );
}

export default Corosail;