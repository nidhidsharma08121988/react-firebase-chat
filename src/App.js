//firebase SDK
import 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
//Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import ChatRoom from './components/ChatRoom'
import SignUpPage from './components/SignUpPage'
import SignOutPage from './components/SignOutPage'
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

//very important step that keeps track of whether user is authenticated
const auth = getAuth()

const App = () => {
  const [user] = useAuthState(auth)

  return (
    <div>
      <header>
        <h1>ChitChat</h1>
        {user ? (
          <SignOutPage auth={auth} />
        ) : (
          <div>Hey Login to use the chatroom</div>
        )}
      </header>
      <section>
        {user ? (
          <ChatRoom auth={auth} user={user} />
        ) : (
          <>
            <SignInPage auth={auth} />
            <hr />
            <h5>New User?</h5>
            <h3>Sign Up</h3>
            <SignUpPage auth={auth} />
          </>
        )}
      </section>
    </div>
  )
}

export default App
