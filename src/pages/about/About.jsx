import React from 'react';
import styles from './about.module.css';
import Hero from '../../components/Hero/Hero';
import profilePic from '../../assets/shibsundarChakraborty.png';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import jsIcon from '../../assets/js.jpeg';
import reactIcon from '../../assets/react.png';
import pythonIcon from '../../assets/python.png';
import nextIcon from '../../assets/NEXT.jpeg';
import expoIcon from '../../assets/expo.png';

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Next.js', icon: nextIcon },
  { name: 'Expo', icon: expoIcon },
];

function About() {
  return (
    <div className={styles.aboutbody}>
      <Hero pageName="About Me" />
      <div className={styles.aboutContainer}>
        <div className={styles.introSection}>
          <div className={styles.introText}>
            <h1>Hi, I'm ShibSundaR ChakrabortY</h1>
            <p>
              I'm a passionate web developer with a love for creating beautiful and functional websites. I enjoy learning new technologies and applying them to build amazing things.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src={profilePic} alt="ShibSundaR ChakrabortY" />
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h2>My Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <img src={skill.icon} alt={skill.name} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.journeySection}>
          <h2>My Journey</h2>
          <p className={styles.jourmyPara} >
            My journey into web development started with a simple "Hello, World!" and has grown into a deep passion for building elegant and efficient solutions. I'm constantly exploring new technologies and frameworks to expand my skillset and deliver high-quality products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
