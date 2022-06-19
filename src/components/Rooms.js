import React from 'react'
import { getRoomsAndIds } from './getRoomsAndIds'
import styles from './Rooms.module.css'

const Rooms = ({ setSelectedRoom, selectedRoom }) => {
  const { roomIds, rooms } = getRoomsAndIds()

  const RoomsList = (
    <ul className={styles.rooms}>
      {roomIds.map(roomId => (
        <li
          key={roomId}
          className={styles.room}
          onClick={() => setSelectedRoom(rooms[roomId])}
        >
          {rooms[roomId].title}
        </li>
      ))}
    </ul>
  )
  return RoomsList
}

export default Rooms
