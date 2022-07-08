import { useContext } from 'react'
import { useState } from 'react'
import { addNewRoomToRoomCollection } from '../../backend/FirebaseModule'
import { ChatContext } from '../../store/ChatState'
import styles from './AddRoomForm.module.css'

const AddRoomForm = ({ hideForm }) => {
  const [title, setTitle] = useState('')
  const { addNewRoom, user } = useContext(ChatContext)

  const submit = async e => {
    e.preventDefault()
    const room = {
      title,
      participants: [user.email],
      creatorEmail: user.email,
    }

    const newRoom = await addNewRoomToRoomCollection(room)
    if (Object.keys(newRoom).length !== 0) {
      addNewRoom({
        ...newRoom,
        id: newRoom.id,
      })
      setTitle('')
    }

    hideForm()
  }

  return (
    <form className={styles.createRoomFormContainer} onSubmit={submit}>
      <input
        className={styles.title}
        placeholder='Room Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <button className={styles.submit} type='submit'>
        Add room
      </button>
    </form>
  )
}
export default AddRoomForm
