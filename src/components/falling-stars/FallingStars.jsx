import React, { useEffect, useState } from 'react';
import styles from './FallingStars.module.css';

const FallingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * -50}%`, // Start off-screen
          width: `${Math.random() *  8 + 8}px`,
          height: `${Math.random() * 8 + 8}px`,
          animationDuration: `${Math.random() * 5 + 5}s`, // 5s to 10s
          animationDelay: `${Math.random() * 5}s`,
          '--x-start': `${Math.random() * 200 - 100}px`,
          '--x-end': `${Math.random() * 200 - 100}px`
        };
        return <div key={i} className={styles.star} style={style} />;
      });
      setStars(newStars);
    };

    generateStars();
  }, []);

  return <div className={styles.starsContainer}>{stars}</div>;
};

export default FallingStars;
