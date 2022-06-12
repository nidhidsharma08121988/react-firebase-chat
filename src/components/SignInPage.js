import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../App'

import styles from './SignInPage.module.css'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signInUser = async e => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      setEmail('')
      setPassword('')
      console.log('User logged in', userCredential.user)
    } catch (error) {
      console.log('In error', error.message)
    }
  }
  return (
    <div className={styles.signInContainer}>
      <h3 className={styles.heading}>Log In</h3>
      <div className={styles.inputContainer}>
        <label htmlFor='emailSignIn' className={styles.labels}>
          Email:
        </label>
        <input
          id='emailSignIn'
          className={styles.input}
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='passwordSignIn'>Password:</label>
        <input
          id='passwordSignIn'
          className={styles.input}
          type='password'
          placeholder='Password'
          value={password}
          name='password'
          onChange={e => setPassword(e.target.value)}
          minLength={6}
          required
        />
      </div>
      <button className={styles.submit} type='submit' onClick={signInUser}>
        Sign In
      </button>
    </div>
  )
}

export default SignInPage
