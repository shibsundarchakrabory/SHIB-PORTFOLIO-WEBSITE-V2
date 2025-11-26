import React from 'react'
import  styles  from "./about.module.css";
import Hero from '../../components/Hero/Hero';


function About() {
  return (
    <div className={styles.aboutbody}>
      <Hero pageName="about"/>
      About
    </div>
  )
}

export default About