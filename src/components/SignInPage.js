import React from 'react'
import { firebase } from 'firebase/app'

const SignInPage = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in using Google</button>
    </>
  )
}

export default SignInPage
