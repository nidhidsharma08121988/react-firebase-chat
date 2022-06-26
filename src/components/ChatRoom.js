import styles from './ChatRoom.module.css'
import Rooms from './Rooms'
import { ChatContext } from '../store/ChatState'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ChatRoom = () => {
  const { user, selectedRoom } = useContext(ChatContext)

  return user ? (
    <div className={styles.chatRoomContainer}>
      <div className={styles.chatRoomsNav}>
        <Rooms />
      </div>
      <div className={styles.chatArea}>{<h4>{selectedRoom.title}</h4>}</div>
    </div>
  ) : (
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
}

export default ChatRoom
