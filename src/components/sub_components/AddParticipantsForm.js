import styles from './AddParticipantsForm.module.css'

export const AddParticipantsForm = () => {
  return (
    <div className={styles.addParticipantsForm}>
      <div className={styles.addParticipantsIcon}>
        <i class='fas fa-user-plus'></i>
      </div>
      <div className={styles.addParticipantsInputAndSave}>
        <input></input>
        <button>save</button>
        <div></div>
      </div>
    </div>
  )
}
