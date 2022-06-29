import React, { useState } from 'react'
import styles from './SendMessageForm.module.css'
const SendMessageForm = () => {
  const [text, setText] = useState('')

  const sendMessage = e => {
    e.preventDefault()
  }
  return (
    <form className={styles.messageFormContainer} onSubmit={sendMessage}>
      <input
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Message...'
        className={styles.messageInput}
      />
      <button className={styles.submit} type='submit'>
        <i className='fa fa-solid fa-paper-plane'></i>
      </button>
    </form>
  )
}

export default SendMessageForm
