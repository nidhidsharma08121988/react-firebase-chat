import React from 'react'
import styles from './WelcomePage.module.css'

const WelcomePage = () => {
  return (
    <div className={styles.welcomeImageContainer}>
      <div className={styles.welcomeImage}>
        <img
          src={require('./MyChitChat.gif')}
          alt='welcome'
          className={styles.myWelcomeImage}
        />
      </div>
    </div>
  )
}

export default WelcomePage
