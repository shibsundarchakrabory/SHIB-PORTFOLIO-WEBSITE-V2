import React from 'react'
import styles from './Home.module.css'
import Hero from '../../components/Hero/Hero'
import Corosail from '../../components/corosail/Corosail'
import TypingAnimation from '../../components/typingAnimation/TypingAnimation'


function Home() {

  const description = "I am a passionate web developer with expertise in creating dynamic and responsive web applications. Welcome to my portfolio where you can explore my projects and skills."


  return (
    <div className={styles.homebody} >
      <Hero pageName="WELLCOME TO MY PORTFOLIO" full />
      <h1>Home Page</h1>
      <TypingAnimation text={description}/>
      <Corosail/>
    </div>
  )
}

export default Home
