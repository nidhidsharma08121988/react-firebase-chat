import React, { useContext } from 'react'
import { ChatContext } from '../store/ChatState'
import SignUpPage from './SignUpPage'
import styles from './WelcomePage.module.css'

const WelcomePage = () => {
  const { isLoggedIn } = useContext(ChatContext)

  return (
    !isLoggedIn && (
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
  )
}

export default WelcomePage
