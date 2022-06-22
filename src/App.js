import React from 'react'
//firebase SDK
import { auth } from './backend/FirebaseModule'
//Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from './App.module.css'
import ChatRoom from './components/ChatRoom'
import SignInPage from './components/SignInPage'
import Header from './components/Header'
import WelcomePage from './components/WelcomePage'

const App = () => {
  const [user] = useAuthState(auth)

  return (
    <Router>
      <div className={styles.app}>
        <Header user={user} auth={auth} />
        <div className={styles.section}>
          {user ? (
            <ChatRoom user={user} />
          ) : (
            <Routes>
              <Route exact path='/' element={<WelcomePage />} />
              <Route exact path='/signIn' element={<SignInPage />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  )
}

export default App
