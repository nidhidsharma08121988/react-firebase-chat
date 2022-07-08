import AddRoomForm from './AddRoomForm'
import styles from './AddRoomSection.module.css'
import { useState } from 'react'

const AddRoomButton = ({ showForm }) => {
  return (
    <button className={styles.createRoomButton} onClick={showForm}>
      New Room
    </button>
  )
}

export const AddRoomSection = () => {
  const [showCreateRoomForm, setShowCreateRoomForm] = useState(false)
  const hideForm = () => {
    setShowCreateRoomForm(false)
  }
  const showForm = () => {
    setShowCreateRoomForm(true)
  }

  return (
    <div className={styles.roomsNavFooter}>
      {showCreateRoomForm ? (
        <AddRoomForm hideForm={hideForm} />
      ) : (
        <AddRoomButton showForm={showForm} />
      )}
    </div>
  )
}
