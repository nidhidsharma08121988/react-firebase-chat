import { useContext } from 'react'
import styles from './AddParticipantsForm.module.css'
import { ChatContext } from './../../store/ChatState'

export const AddParticipantsForm = () => {
  const { selectedRoom } = useContext(ChatContext)
  return (
    <div className={styles.addParticipantsContainer}>
      <div className={styles.title}>{selectedRoom.title}</div>
      <div className={styles.addParticipantsForm}>
        <input className={styles.participantList}></input>
        <div className={styles.addParticipantsIcon}>
          <i className='fas fa-user-plus'></i>
        </div>
      </div>
    </div>
  )
}
