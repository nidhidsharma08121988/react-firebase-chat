import React from 'react'
import styles from './Room.module.css'

const Room = ({ room, setSelectedRoom, selectedRoom }) => {
  const isSelected = selectedRoom.id === room.id
  return (
    <li
      key={room.id}
      className={isSelected ? styles.selectedRoom : styles.room}
      onClick={() => setSelectedRoom(room)}
    >
      {room.title}
    </li>
  )
}

export default Room
