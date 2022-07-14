import { ChatContext } from '../store/ChatState'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './ChatRoom.module.css'
import Rooms from './sub_components/Rooms'

import Messages from './sub_components/Messages'
import SendMessageForm from './sub_components/SendMessageForm'
import { AddRoomSection } from './sub_components/AddRoomSection'
import { AddParticipantsForm } from './sub_components/AddParticipantsForm'

const ShowRooms = () => {
  return (
    <div className={styles.participantsAndChatRoomContainer}>
      <div className={styles.addParticipantsFormContainer}>
        <AddParticipantsForm />
      </div>
      <div className={styles.chatRoomContainer}>
        <div className={styles.chatRoomsNav}>
          <Rooms />
          <AddRoomSection />
        </div>
        <div className={styles.chatArea}>
          <Messages />
          <SendMessageForm />
        </div>
      </div>
    </div>
  )
}
const ShowWarning = () => (
  <div className={styles.warningContainer}>
    <h3>Please login to access this url</h3>
    <div>
      <Link to='/'>
        <button className={styles.submit}>Back</button>
      </Link>
      <Link to='/signIn'>
        <button className={styles.submit}>Log In</button>
      </Link>
    </div>
  </div>
)
const ChatRoom = () => {
  const { isLoggedIn } = useContext(ChatContext)
  return isLoggedIn ? <ShowRooms /> : <ShowWarning />
}

export default ChatRoom
