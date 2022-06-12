import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../App'

const SignOutButton = () => {
  const handleClick = async e => {
    try {
      await signOut(auth)
      console.log('user signed out')
    } catch (error) {
      console.log('in error', error.message)
    }
  }
  return <button onClick={handleClick}>Sign Out</button>
}

export default SignOutButton
