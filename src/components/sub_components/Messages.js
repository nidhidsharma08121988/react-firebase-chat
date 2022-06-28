import { useEffect } from 'react'
import { useContext } from 'react'
import { ChatContext } from '../../store/ChatState'

import styles from './Messages.module.css'

const Message = ({ message }) => {
  return (
    <li className={styles.messageContainer}>
      <div className={styles.messageHeader}>
        <div>{message.authorEmail}</div>
        <div>
          <i className='fa-solid fa-ellipsis'></i>
        </div>
      </div>
      <div>{message.text}</div>
    </li>
  )
}
const Messages = () => {
  const { selectedRoom, getMessagesOfSelectedRoom, messages } =
    useContext(ChatContext)

  useEffect(() => {
    getMessagesOfSelectedRoom(selectedRoom)
    //eslint-disable-next-line
  }, [selectedRoom])

  return (
    <ul className={styles.messagesContainer}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </ul>
  )
}
export default Messages
