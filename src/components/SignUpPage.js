import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpPage = ({ auth, email, password }) => {
  const signInWithGoogle = () => {
    createUserWithEmailAndPassword(auth, email, password)
  }
  return (
    <form>
      <label htmlFor='email'>
        <input id='email' type='email' />
      </label>
      <label for='password'>
        <input id='password' type='password' />
      </label>
      <button type='submit' onClick={signInWithGoogle}>
        Sign up
      </button>
    </form>
  )
}

export default SignUpPage
