//firebase SDK
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'
import { firebase, initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
//Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import ChatRoom from './components/ChatRoom'
import SignInPage from './components/SignInPage'

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

const auth = firebase.auth()

const App = () => {
  const [user] = useAuthState(auth)

  return (
    <div>
      <header>
        <h1>ChitChat</h1>
      </header>
      <section>{user ? <ChatRoom auth /> : <SignInPage auth />}</section>
    </div>
  )
}

export default App
