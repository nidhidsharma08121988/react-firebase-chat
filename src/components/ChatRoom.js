import styles from './ChatRoom.module.css'
import Rooms from './Rooms'
import { ChatContext } from '../store/ChatState'
import { useContext } from 'react'

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
    <div className={styles.chatRoomContainer}>
      <h3>Please login to access this url</h3>
    </div>
  )
}

export default ChatRoom
