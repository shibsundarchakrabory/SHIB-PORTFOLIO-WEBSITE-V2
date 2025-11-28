import React from 'react'
import styles from './Home.module.css'
import Hero from '../../components/Hero/Hero'
import Corosail from '../../components/corosail/Corosail'
import TypingAnimation from '../../components/typingAnimation/TypingAnimation'


function Home() {
  return (
    <div className={styles.homebody} >
      <Hero pageName="WELLCOME TO MY PORTFOLIO" full />
      <h1>Home Page</h1>
      <TypingAnimation text="dkfgadhkfldfgbadylfdyfgvydsjdhlksvfsyhd"/>
      <Corosail/>
    </div>
  )
}

export default Home
