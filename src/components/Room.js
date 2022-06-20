import React from 'react'
import styles from './Room.module.css'

const Room = ({ room, setSelectedRoom }) => {
  return (
    <li
      key={room.id}
      className={styles.room}
      onClick={() => setSelectedRoom(room)}
    >
      {room.title}
    </li>
  )
}

export default Room
