import React from 'react'
import { useContext } from 'react'
import { ChatContext } from '../store/ChatState'
import Room from './Room'
import styles from './Rooms.module.css'

const Rooms = ({ setSelectedRoom, selectedRoom }) => {
  const { rooms } = useContext(ChatContext)

  const RoomsList = (
    <ul className={styles.rooms}>
      {rooms &&
        rooms.map(room => (
          <Room
            key={room.id}
            room={room}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
        ))}
    </ul>
  )
  return RoomsList
}

export default Rooms
