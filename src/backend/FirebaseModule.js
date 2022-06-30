//firebase SDK
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAWn5a6SUM0dDrrjOE18eYsa6kzr3S9EbA',
  authDomain: 'my-awesome-react-chat-app.firebaseapp.com',
  projectId: 'my-awesome-react-chat-app',
  storageBucket: 'my-awesome-react-chat-app.appspot.com',
  messagingSenderId: '280483083181',
  appId: '1:280483083181:web:44a1c7077b18c59412a724',
  measurementId: 'G-L6S3BPEH48',
}

const firebaseApp = initializeApp(firebaseConfig)

//very important step that keeps track of whether user is authenticated
export const auth = getAuth(firebaseApp)

//src: https://www.youtube.com/watch?v=2yNyiW_41H8&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=4
const database = getFirestore(firebaseApp)

export const roomsCollection = collection(database, 'rooms')
export const messagesCollection = collection(database, 'messages')

export const getAllRoomsWithIdFromDatabase = async () => {
  try {
    const snapshot = await getDocs(roomsCollection)
    const docs = snapshot.docs
    let myRooms = []
    docs.forEach(doc => {
      myRooms.push({
        ...doc.data(),
        id: doc.id,
      })
    })
    return myRooms
  } catch (error) {
    console.log(error.message)
    return []
  }
}

export const getAllMessagesWithIdFromDatabase = async () => {
  try {
    const snapshot = await getDocs(messagesCollection)
    const docs = snapshot.docs
    let myMessages = []
    docs.forEach(doc => {
      myMessages.push({
        ...doc.data(),
        id: doc.id,
      })
    })
    return myMessages
  } catch (error) {
    console.log(error.message)
    return []
  }
}
