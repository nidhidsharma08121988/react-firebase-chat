import styles from './CreateRoomSection.module.css'

const CreateRoomButton = () => {
  return <button className={styles.createRoomButton}>Create New Room</button>
}

export const CreateRoomSection = () => {
  return (
    <div className={styles.roomsNavFooter}>
      <div>
        <input placeholder='Room title' />
      </div>
      <CreateRoomButton />
    </div>
  )
}
