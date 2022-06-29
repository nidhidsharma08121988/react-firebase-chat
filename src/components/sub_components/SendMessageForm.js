import React, { useState } from 'react'
import { useContext } from 'react'
import styles from './SendMessageForm.module.css'
import { ChatContext } from './../../store/ChatState'
const SendMessageForm = () => {
  const [text, setText] = useState('')
  const { selectedRoom, user } = useContext(ChatContext)

  const sendMessage = e => {
    e.preventDefault()
    const message = {
      text: text,
      roomId: selectedRoom.id,
      authorEmail: user.email,
      created: Date.now(),
    }
    console.log(message)
    setText('')
  }
  return (
    <form className={styles.messageFormContainer} onSubmit={sendMessage}>
      <input
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Message...'
        className={styles.messageInput}
        required
      />
      <button className={styles.submit} type='submit'>
        <i className='fa fa-solid fa-paper-plane'></i>
      </button>
    </form>
  )
}

export default SendMessageForm
