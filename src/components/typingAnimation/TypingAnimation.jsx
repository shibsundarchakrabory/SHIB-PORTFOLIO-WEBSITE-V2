import React, { useState, useEffect } from "react";
import styles from "./TypingAnimation.module.css";

function TypingAnimation(props) {
  const { text, speed = 100 } = props; // Default speed: 100ms per character
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Reset on text change
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(intervalId);
  }, [text, speed]); // Rerun effect if text or speed props change

  // Check if the animation is finished to remove the cursor
  const isTypingFinished = displayedText.length === text.length;

  return (
    <div className={styles.TypingAnimationBody}>
      <div
        className={`${styles.TypingAnimationSec1} ${
          !isTypingFinished ? styles.typingCursor : ""
        }`}
      >
        <div className={styles.typingDecor}>
          <h2>{displayedText}</h2>
        </div>
      </div>
      <div className={styles.TypingAnimationSec2}>
        <div className={styles.circuitBoard}>
          <div className={`${styles.line} ${styles.line1}`}></div>
          <div className={`${styles.line} ${styles.line2}`}></div>
          <div className={`${styles.line} ${styles.line3}`}></div>
          <div className={`${styles.line} ${styles.line4}`}></div>
          <div className={`${styles.line} ${styles.line5}`}></div>
          <div className={`${styles.line} ${styles.line6}`}></div>
          <div className={`${styles.line} ${styles.line7}`}></div>
          <div className={`${styles.line} ${styles.line8}`}></div>
          <div className={`${styles.line} ${styles.line9}`}></div>
          <div className={`${styles.line} ${styles.line10}`}></div>
          <div className={`${styles.line} ${styles.line11}`}></div>
          <div className={`${styles.line} ${styles.line12}`}></div>
          <div className={`${styles.line} ${styles.line13}`}></div>
          <div className={`${styles.line} ${styles.line14}`}></div>
          <div className={`${styles.line} ${styles.line15}`}></div>
          <div className={`${styles.line} ${styles.line16}`}></div>
          <div className={`${styles.line} ${styles.line17}`}></div>
          <div className={`${styles.line} ${styles.line18}`}></div>
          <div className={`${styles.line} ${styles.line19}`}></div>
          <div className={`${styles.line} ${styles.line20}`}></div>
          <div className={`${styles.line} ${styles.line21}`}></div>
          <div className={`${styles.line} ${styles.line22}`}></div>
          <div className={`${styles.line} ${styles.line23}`}></div>
          <div className={`${styles.line} ${styles.line24}`}></div>
          <div className={`${styles.line} ${styles.line25}`}></div>
          <div className={`${styles.component} ${styles.comp1}`}></div>
          <div className={`${styles.component} ${styles.comp2}`}></div>
          <div className={`${styles.component} ${styles.comp3}`}></div>
          <div className={`${styles.component} ${styles.comp4}`}></div>
          <div className={`${styles.component} ${styles.comp5}`}></div>
          <div className={`${styles.component} ${styles.comp6}`}></div>
          <div className={`${styles.component} ${styles.comp7}`}></div>
          <div className={`${styles.component} ${styles.comp8}`}></div>
          <div className={`${styles.component} ${styles.comp9}`}></div>
          <div className={`${styles.component} ${styles.comp10}`}></div>
          <div className={`${styles.component} ${styles.comp11}`}></div>
          <div className={`${styles.component} ${styles.comp12}`}></div>
          <div className={`${styles.component} ${styles.comp13}`}></div>
          <div className={`${styles.component} ${styles.comp14}`}></div>
          <div className={`${styles.component} ${styles.comp15}`}></div>
          <div className={`${styles.component} ${styles.comp16}`}></div>
          <div className={`${styles.component} ${styles.comp17}`}></div>
          <div className={`${styles.component} ${styles.comp18}`}></div>
          <div className={`${styles.component} ${styles.comp19}`}></div>
          <div className={`${styles.component} ${styles.comp20}`}></div>
        </div>
      </div>
    </div>
  );
}

export default TypingAnimation;
