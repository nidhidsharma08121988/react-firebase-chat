import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../backend/FirebaseModule'
import styles from './SignOutButton.module.css'

const SignOutButton = () => {
  const navigate = useNavigate()

  const handleClick = async e => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.log('in error', error.message)
    }
  }
  return (
    <button className={styles.signOut} onClick={handleClick}>
      Sign Out
    </button>
  )
}

export default SignOutButton
