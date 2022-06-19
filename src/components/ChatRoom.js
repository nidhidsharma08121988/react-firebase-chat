import styles from './ChatRoom.module.css'
import Rooms from './Rooms'

const ChatRoom = () => {
  const rooms = Rooms()
  return (
    <div className={styles.chatRoomContainer}>
      <div className={styles.chatRoomsNav}>{rooms}</div>
      <div className={styles.chatArea}>Chat area</div>
    </div>
  )
}

export default ChatRoom
