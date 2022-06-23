import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../backend/FirebaseModule'
import styles from './SignOutButton.module.css'

const SignOutButton = () => {
  const handleClick = async e => {
    try {
      await signOut(auth)
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
