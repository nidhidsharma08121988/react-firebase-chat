import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../FirebaseModule'
import styles from './SignOutButton.module.css'

const SignOutButton = () => {
  const handleClick = async e => {
    try {
      await signOut(auth)
      console.log('user signed out')
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