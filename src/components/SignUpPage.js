import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpPage = ({ auth }) => {
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
    <div>
      <div className='signup-container'>
        <label htmlFor='email'>
          Email:
          <br />
          <input
            id='email'
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor='password'>
          Password:
          <br />
          <input
            id='password'
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
        <button type='submit' onClick={signUp}>
          Sign up
        </button>
      </div>
      <div>
        <div>Or</div>
        <button>Sign Up using google</button>
      </div>
    </div>
  )
}

export default SignUpPage
