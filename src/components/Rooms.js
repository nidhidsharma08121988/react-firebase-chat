import React from 'react'
import { getRoomsListWithIds } from './getRoomsAndIds'
import styles from './Rooms.module.css'

const Rooms = ({ setSelectedRoom, selectedRoom }) => {
  const rooms = getRoomsListWithIds()

  const RoomsList = (
    <ul className={styles.rooms}>
      {rooms.map(room => (
        <li
          key={room.id}
          className={styles.room}
          onClick={() => setSelectedRoom(room)}
        >
          {room.title}
        </li>
      ))}
    </ul>
  )
  return RoomsList
}

export default Rooms
