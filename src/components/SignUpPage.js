import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../backend/FirebaseModule'
import styles from './SignUpPage.module.css'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const signUp = async e => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      setEmail('')
      setPassword('')
      setErrorMessage('')
      navigate('/chatRoom')
    } catch (error) {
      setErrorMessage(error.message)
      setEmail('')
      setPassword('')
    }
  }
  return (
    <form className={styles.signUpContainer} onSubmit={signUp}>
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
          pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'
          required
        />
        <span style={{ fontSize: 7, color: 'teal' }}>
          Password must be at least 6 characters long and must have at least one
          number and one letter
        </span>
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
      </div>
      <button className={styles.submit} type='submit'>
        Sign up
      </button>
    </form>
  )
}

export default SignUpPage
