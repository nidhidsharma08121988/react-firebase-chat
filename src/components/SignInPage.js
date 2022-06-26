import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../backend/FirebaseModule'
import { useNavigate } from 'react-router-dom'
import styles from './SignInPage.module.css'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const signInUser = async e => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      setEmail('')
      setPassword('')
      navigate('/chatRoom')
    } catch (error) {
      setErrorMessage('The email or password you entered is incorrect.')
      setEmail('')
      setPassword('')
    }
  }
  return (
    <form className={styles.signInContainer} onSubmit={signInUser}>
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
          required
        />
      </div>
      {errorMessage !== '' ? (
        <span
          style={{
            color: 'red',
          }}
        >
          {errorMessage}
        </span>
      ) : (
        ''
      )}
      <button className={styles.submit} type='submit'>
        Sign In
      </button>
    </form>
  )
}

export default SignInPage
