import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import styles from './App.module.css'
import Header from './components/Header'
import ChatState from './store/ChatState'
import MainPanel from './components/MainPanel'

const App = () => {
  return (
    <ChatState>
      <Router>
        <div className={styles.app}>
          <Header />
          <MainPanel />
        </div>
      </Router>
    </ChatState>
  )
}

export default App
