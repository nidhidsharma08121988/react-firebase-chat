import { useState } from 'react'
import styles from './AddRoomForm.module.css'

const AddRoomForm = ({ hideForm }) => {
  const [title, setTitle] = useState('')

  const submit = e => {
    e.preventDefault()
    hideForm()
  }

  return (
    <form className={styles.createRoomFormContainer} onSubmit={submit}>
      <input
        className={styles.title}
        placeholder='Room Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className={styles.submit} type='submit'>
        Add room
      </button>
    </form>
  )
}
export default AddRoomForm
