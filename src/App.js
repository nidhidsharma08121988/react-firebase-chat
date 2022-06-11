//firebase SDK
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
//Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from './App.module.css'
import ChatRoom from './components/ChatRoom'
import SignUpPage from './components/SignUpPage'
import SignInPage from './components/SignInPage'
import Header from './components/Header'
import WelcomePage from './components/WelcomePage'

const firebaseConfig = {
  apiKey: 'AIzaSyAWn5a6SUM0dDrrjOE18eYsa6kzr3S9EbA',
  authDomain: 'my-awesome-react-chat-app.firebaseapp.com',
  projectId: 'my-awesome-react-chat-app',
  storageBucket: 'my-awesome-react-chat-app.appspot.com',
  messagingSenderId: '280483083181',
  appId: '1:280483083181:web:44a1c7077b18c59412a724',
  measurementId: 'G-L6S3BPEH48',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

//very important step that keeps track of whether user is authenticated

export const auth = getAuth()

const App = () => {
  const [user] = useAuthState(auth)

  return (
    <div className={styles.app}>
      <Header user={user} auth={auth} />
      <div className={styles.section}>
        {user ? (
          <ChatRoom auth={auth} user={user} />
        ) : (
          <Router>
            <Routes>
              <Route exact path='/' element={<WelcomePage />} />
              <Route
                exact
                path='/signIn'
                element={<SignInPage auth={auth} />}
              />
              <Route
                exact
                path='/signUp'
                element={<SignUpPage auth={auth} />}
              />
            </Routes>
          </Router>
        )}
      </div>
    </div>
  )
}

export default App
