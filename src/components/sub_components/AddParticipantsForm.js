import { useContext, useState, useEffect } from 'react'
import styles from './AddParticipantsForm.module.css'
import { ChatContext } from './../../store/ChatState'
import { updateRoomCollection } from '../../backend/FirebaseModule'

export const AddParticipantsForm = () => {
  const { selectedRoom, updateRoom } = useContext(ChatContext)
  const [participant, setParticipant] = useState('')
  const [participants, setParticipants] = useState('')
  useEffect(() => {
    setParticipants(selectedRoom.participants.join(', '))
  }, [selectedRoom])

  const handleComma = e => {
    if (e.code === 'Enter') {
      e.preventDefault()
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

      setParticipants(selectedRoom.participants.join(', '))
      setParticipant('')
    }
  }

  const handleChange = e => {
    if (e.code !== 'Enter') setParticipant(e.target.value)
  }

  return (
    <div className={styles.addParticipantsContainer}>
      <div>
        <div className={styles.title}>{selectedRoom.title}</div>
        <div className={styles.displayParticipant}>{participants}</div>
      </div>
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
