import { useEffect } from 'react'
import { useContext } from 'react'
import { ChatContext } from '../../store/ChatState'

const Message = ({ message }) => {
  return <div>{message.text}</div>
}
const Messages = () => {
  const { selectedRoom, getMessagesOfSelectedRoom, messages } =
    useContext(ChatContext)

  useEffect(() => {
    getMessagesOfSelectedRoom(selectedRoom)
    //eslint-disable-next-line
  }, [selectedRoom])

  return messages.map(message => <Message key={message.id} message={message} />)
}
export default Messages
