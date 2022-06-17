import { auth } from '../FirebaseModule.js'
import styles from './ChatRoom.module.css'
const ChatRoom = ({ user }) => {
  return (
    <div className={styles.chatRoomContainer}>
      <div className={styles.chatNav}>Chat nav</div>
      <div className={styles.roomArea}>Room area</div>
    </div>
  )
}

export default ChatRoom
