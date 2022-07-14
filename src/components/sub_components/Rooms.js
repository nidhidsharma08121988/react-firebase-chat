import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { updateRoomCollection } from '../../backend/FirebaseModule'
import { ChatContext } from '../../store/ChatState'
// import Room from './Room'
import styles from './Rooms.module.css'

const Room = ({ room }) => {
  const { selectedRoom, setSelectedRoom, updateRoom } = useContext(ChatContext)
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(room.title)

  useEffect(() => {
    setIsEditing(false)
  }, [selectedRoom])

  const showEditMode = () => {
    setIsEditing(true)
  }

  const renameAndHideInputBox = e => {
    if (e.key === 'Enter') {
      const updatedProperties = {
        title: editTitle,
      }
      updateRoomCollection(room.id, updatedProperties)
      updateRoom(room.id, updatedProperties)
      setIsEditing(false)
    }
  }

  const isSelected = selectedRoom && selectedRoom.id === room.id
  return (
    <li
      className={isSelected ? styles.selectedRoom : styles.room}
      onClick={() => setSelectedRoom(room)}
    >
      {isEditing ? (
        <input
          className={styles.titleInput}
          value={editTitle}
          onChange={e => setEditTitle(e.target.value)}
          onKeyDown={renameAndHideInputBox}
        ></input>
      ) : (
        <div>{room.title}</div>
      )}
      <div>
        <i
          className={`fa-solid fa-pen ${styles.icon}`}
          onClick={showEditMode}
        ></i>
      </div>
    </li>
  )
}

const Rooms = () => {
  const { rooms } = useContext(ChatContext)

  const RoomsList = rooms.length > 0 && (
    <ul className={styles.rooms}>
      {rooms.length > 0 &&
        rooms.map(room => <Room key={room.id} room={room} />)}
    </ul>
  )
  return RoomsList
}

export default Rooms
