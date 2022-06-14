import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../App'
import styles from './SignUpPage.module.css'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signUp = async e => {
    console.log('in signup')
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      setEmail('')
      setPassword('')
      console.log('User created', userCredential)
    } catch (error) {
      console.log('In error', error.message)
    }
  }
  return (
    <div className={styles.signUpContainer}>
      <h3 className={styles.heading}>Register</h3>
      <div className={styles.inputContainer}>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
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
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
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
      <button className={styles.submit} type='submit' onClick={signUp}>
        Sign up
      </button>
    </div>
  )
}

export default SignUpPage
