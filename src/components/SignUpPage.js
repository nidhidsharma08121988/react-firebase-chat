import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpPage = ({ auth }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signUp = async () => {
    console.log('in signup')
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log('User created', userCredential)
    } catch (error) {
      console.log('In error')
    }
  }
  return (
    <div>
      <form>
        <label htmlFor='email'>
          <input
            id='email'
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor='password'>
          <input
            id='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </label>
        <button type='submit' onClick={signUp}>
          Sign up
        </button>
      </form>
      <div>
        <div>or</div>
        <button>SignUp using google</button>
      </div>
    </div>
  )
}

export default SignUpPage
