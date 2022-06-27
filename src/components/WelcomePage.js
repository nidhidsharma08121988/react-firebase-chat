import React from 'react'
import { useContext } from 'react'
import SignUpPage from './SignUpPage'
import styles from './WelcomePage.module.css'

const WelcomePage = () => {
  return (
    <div className={styles.welcomeImageSignUpContainer}>
      <div className={styles.welcomeImage}>
        <img
          src={require('./MyChitChat.gif')}
          alt='welcome'
          className={styles.myWelcomeImage}
        />
      </div>
      <div className={styles.formContainer}>
        <SignUpPage />
      </div>
    </div>
  )
}

export default WelcomePage
