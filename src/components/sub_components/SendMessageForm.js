import React from 'react'
import styles from './SendMessageForm.module.css'
const SendMessageForm = () => {
  return (
    <div className={styles.messageFormContainer}>
      <input className={styles.messageInput} />
      <div className={styles.submit}>
        <i class='fa-solid fa-greater-than'></i>
      </div>
    </div>
  )
}

export default SendMessageForm
