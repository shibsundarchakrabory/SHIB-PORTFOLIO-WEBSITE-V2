import React from 'react'
import styles from './hero.module.css'


function Hero(props) {

  const pageName = props.pageName
  
  return (
    <div className={styles.herobody} >{pageName}</div>
  )
}

export default Hero