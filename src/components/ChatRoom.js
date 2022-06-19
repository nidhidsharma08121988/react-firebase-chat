import styles from './ChatRoom.module.css'
import Rooms from './Rooms'
import { useState } from 'react'

const ChatRoom = () => {
  const [selectedRoom, setSelectedRoom] = useState({
    title: '',
    admins: [],
    participants: [],
  })
  const handleRoomSelection = room => {
    setSelectedRoom(room)
  }
  
  return (
    <div className={styles.chatRoomContainer}>
      <div className={styles.chatRoomsNav}>
        <Rooms
          setSelectedRoom={handleRoomSelection}
          selectedRoom={selectedRoom}
        />
      </div>
      <div className={styles.chatArea}>{<h4>{selectedRoom.title}</h4>}</div>
    </div>
  )
}

export default ChatRoom
