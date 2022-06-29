import { useEffect } from 'react'
import { useContext } from 'react'
import { ChatContext } from '../../store/ChatState'
import moment from 'moment'
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
      <div className={styles.messageText}>{message.text}</div>
      <div className={styles.messageCreated}>
        {moment(message.created).format('h:mm a')}
      </div>
    </li>
  )
}
const Messages = () => {
  const { selectedRoom, setMessagesOfSelectedRoom, messages } =
    useContext(ChatContext)

  useEffect(() => {
    setMessagesOfSelectedRoom(selectedRoom)
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
