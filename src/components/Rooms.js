import React from 'react'
import { useContext } from 'react'
import { ChatContext } from '../store/ChatState'
// import Room from './Room'
import styles from './Rooms.module.css'

const Room = ({ room }) => {
  const { selectedRoom, setSelectedRoom } = useContext(ChatContext)

  const isSelected = selectedRoom && selectedRoom.id === room.id
  return (
    <li
      className={isSelected ? styles.selectedRoom : styles.room}
      onClick={() => setSelectedRoom(room)}
    >
      {room.title}
    </li>
  )
}

const Rooms = () => {
  const { rooms } = useContext(ChatContext)

  const RoomsList = (
    <ul className={styles.rooms}>
      {rooms && rooms.map(room => <Room key={room.id} room={room} />)}
    </ul>
  )
  return RoomsList
}

export default Rooms
