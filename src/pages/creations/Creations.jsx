import React from 'react'
import styles from './Creations.module.css';
import Corosail from '../../components/corosail/Corosail';
import FadeInCards from '../../components/fadeinCards/FadeInCards';


function Creations() {
  return (
    <div className={styles.Creationsbody} >
      <Corosail/>
      <FadeInCards />
    </div> 
  )
}

export default Creations
