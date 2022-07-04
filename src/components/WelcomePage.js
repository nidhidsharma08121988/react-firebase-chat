import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatContext } from '../store/ChatState'
import SignUpPage from './SignUpPage'
import styles from './WelcomePage.module.css'

const WelcomePage = () => {
  const { isLoggedIn } = useContext(ChatContext)
  const navigate = useNavigate()
  return !isLoggedIn ? (
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
  ) : (
    navigate('/chatRoom')
  )
}

export default WelcomePage
