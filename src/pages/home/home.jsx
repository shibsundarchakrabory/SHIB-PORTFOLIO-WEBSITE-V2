import React from 'react'
import styles from './Home.module.css'
import Hero from '../../components/Hero/Hero'
import Corosail from '../../components/corosail/Corosail'


function Home() {
  return (
    <div className={styles.homebody} >
      <Hero pageName="Home" />
      <h1>Home Page</h1>
      <Corosail/>
    </div>
  )
}

export default Home
