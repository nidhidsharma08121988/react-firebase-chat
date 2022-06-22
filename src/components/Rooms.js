import React from 'react'
import { getRoomsListWithIds } from '../store/getRoomsListWithIds'
import Room from './Room'
import styles from './Rooms.module.css'

const Rooms = ({ setSelectedRoom, selectedRoom }) => {
  const rooms = getRoomsListWithIds()

  const RoomsList = (
    <ul className={styles.rooms}>
      {rooms.map(room => (
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
