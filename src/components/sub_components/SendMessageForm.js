import React, { useState, useContext } from 'react'
import { addDoc } from 'firebase/firestore'
import styles from './SendMessageForm.module.css'
import { ChatContext } from './../../store/ChatState'
import { messagesCollection } from '../../backend/FirebaseModule'

const SendMessageForm = () => {
  const [text, setText] = useState('')
  const { selectedRoom, user, addMessage } = useContext(ChatContext)

  const sendMessage = async e => {
    e.preventDefault()
    const message = {
      text: text,
      roomId: selectedRoom.id,
      authorEmail: user.email,
      created: Date.now(),
    }
    //https:www.youtube.com/watch?v=s1frrNxq4js&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=5
    await addDoc(messagesCollection, message)
    addMessage(message)
    console.log('message added')
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
