import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../App'

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
    <div>
      <div className='signup-container'>
        <label htmlFor='emailSignIn'>
          Email:
          <br />
          <input
            id='emailSignIn'
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor='passwordSignIn'>
          Password:
          <br />
          <input
            id='passwordSignIn'
            type='password'
            placeholder='Password'
            value={password}
            name='password'
            onChange={e => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </label>
        <br />
        <button type='submit' onClick={signInUser}>
          Sign In
        </button>
      </div>
      <div>
        <div>Or</div>
        <button>Sign In using google</button>
      </div>
    </div>
  )
}

export default SignInPage
