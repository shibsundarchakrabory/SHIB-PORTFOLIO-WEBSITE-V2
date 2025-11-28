import React, { useState, useEffect } from 'react';
import styles from "./TypingAnimation.module.css";

function TypingAnimation(props) {
  const { text, speed = 100 } = props; // Default speed: 100ms per character
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
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
      <div className={`${styles.TypingAnimationSec1} ${!isTypingFinished ? styles.typingCursor : ''}`}>
        <h2>{displayedText}</h2>
        <h2>{displayedText}</h2>
      </div>
      <div className={styles.TypingAnimationSec2}>
        {/* You can put other content here if needed */}
      </div>
    </div>
  );
}

export default TypingAnimation;
