import styles from './ChatRoom.module.css'
import Rooms from './Rooms'
import { ChatContext } from '../store/ChatState'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import RoomMessages from './sub_components/RoomMessages'
import SendMessageForm from './sub_components/SendMessageForm'

const showWarning = (
  <div className={styles.warningContainer}>
    <h3>Please login to access this url</h3>
    <div>
      <Link to='/'>
        <button className={styles.submit}>Back</button>
      </Link>
      <Link to='/signIn'>
        <button className={styles.submit}>Log In</button>
      </Link>
    </div>
  </div>
)
const showRooms = (
  <div className={styles.chatRoomContainer}>
    <div className={styles.chatRoomsNav}>
      <Rooms />
    </div>
    <div className={styles.chatArea}>
      <RoomMessages />
      <SendMessageForm />
    </div>
  </div>
)
const ChatRoom = () => {
  const { isLoggedIn } = useContext(ChatContext)

  return isLoggedIn ? showRooms : showWarning
}

export default ChatRoom
