import React from 'react'
import { useContext } from 'react'
import { ChatContext } from '../store/ChatState'
import styles from './Room.module.css'

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

export default Room
