import React, { useEffect, useRef } from 'react';
import styles from './FadeInCards.module.css';
import reactImage from '../../assets/react.png'; // Example image

const creations = [
  {
    id: 1,
    title: 'CALCULATOR',
    description: 'its a calculator.',
    image: reactImage,
    link: 'https://shibsundarchakrabory.github.io/CALCULATOR/',
  },
  {
    id: 2,
    title: 'LIGHAR-TECH',
    description: 'A Company i site i created.',
    image: reactImage,
    link: 'https://lighartech00.github.io/LIGHAR-TECH/',
  },
  // {
  //   id: 3,
  //   title: 'Project Three',
  //   description: 'A brief description of Project Three. It is a full-stack application with a Node.js backend.',
  //   image: reactImage,
  //   link: '#',
  // },
  // {
  //   id: 4,
  //   title: 'Project Four',
  //   description: 'A brief description of Project Four. It is a data science project using Python.',
  //   image: reactImage,
  //   link: '#',
  // },
  // {
  //   id: 5,
  //   title: 'Project Five',
  //   description: 'A brief description of Project Five. It is a machine learning model deployment.',
  //   image: reactImage,
  //   link: '#',
  // },
  {
    id: 6,
    title: ' QR Code Generator',
    description: 'You enter the data select the cr code colors press enter and done.',
    image: reactImage,
    link: 'https://shibsundarchakrabory.github.io/qr_Code_genarator/',
  },
];

function FadeInCards() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className={styles.creationsContainer}>
      <h2 className={styles.creationsTitle}>My Creations</h2>
      <div className={styles.cardsGrid}>
        {creations.map((creation, index) => (
          <div
            key={creation.id}
            className={styles.card}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={creation.image} alt={creation.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{creation.title}</h3>
              <p className={styles.cardDescription}>{creation.description}</p>
              <a href={creation.link} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FadeInCards;

