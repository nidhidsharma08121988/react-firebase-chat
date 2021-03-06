import React from 'react'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChatContext } from '../store/ChatState'
import styles from './MainPanel.module.css'
import ChatRoom from './ChatRoom'
import SignInPage from './SignInPage'
import WelcomePage from './WelcomePage'

const MainPanel = () => {
  return (
    <div className={styles.section}>
      <Routes>
        <Route exact path='/' element={<WelcomePage />} />
        <Route exact path='/signIn' element={<SignInPage />} />
        <Route exact path='/chatRoom' element={<ChatRoom />} />
      </Routes>
    </div>
  )
}

export default MainPanel
