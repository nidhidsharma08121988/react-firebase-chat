import styles from './CreateRoomsButton.module.css'

export const CreateRoomsButton = () => {
  return (
    <div className={styles.roomsNavFooter}>
      <button className={styles.createRoomButton}>Create New Room</button>
    </div>
  )
}
