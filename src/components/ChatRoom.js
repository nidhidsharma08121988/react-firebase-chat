import styles from './ChatRoom.module.css'
import Rooms from './Rooms'
import { ChatContext } from '../store/ChatState'
import { useContext } from 'react'

const ChatRoom = () => {
  const { selectedRoom } = useContext(ChatContext)

  return (
    <div className={styles.chatRoomContainer}>
      <div className={styles.chatRoomsNav}>
        <Rooms />
      </div>
      <div className={styles.chatArea}>{<h4>{selectedRoom.title}</h4>}</div>
    </div>
  )
}

export default ChatRoom
