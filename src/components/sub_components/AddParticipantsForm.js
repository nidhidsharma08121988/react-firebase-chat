import { useContext, useState } from 'react'
import styles from './AddParticipantsForm.module.css'
import { ChatContext } from './../../store/ChatState'
import { updateRoomCollection } from '../../backend/FirebaseModule'

export const AddParticipantsForm = () => {
  const { selectedRoom, updateRoom } = useContext(ChatContext)
  const [participant, setParticipant] = useState('')

  const handleComma = e => {
    if (e.code === 'Enter') {
      e.preventDefault() //will not submit or click other buttons
      const participantEmail = e.target.value
      const newParticipantsList = [
        ...selectedRoom.participants,
        participantEmail,
      ]
      const updatedProperties = {
        participants: newParticipantsList,
      }
      updateRoomCollection(selectedRoom.id, updatedProperties)
      updateRoom(selectedRoom.id, updatedProperties)
      setParticipant('')
    }
  }

  const handleChange = e => {
    if (e.code !== 'Enter') setParticipant(e.target.value)
  }

  return (
    <div className={styles.addParticipantsContainer}>
      <div className={styles.title}>{selectedRoom.title}</div>
      <div className={styles.addParticipantsForm}>
        <input
          className={styles.participantInput}
          value={participant}
          placeholder='Add New Participant...'
          onChange={handleChange}
          onKeyDown={handleComma}
        ></input>
      </div>
    </div>
  )
}
