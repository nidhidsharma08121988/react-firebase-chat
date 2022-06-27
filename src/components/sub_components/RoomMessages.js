import { useEffect } from 'react'
import { useContext } from 'react'
import { ChatContext } from '../../store/ChatState'

const RoomMessage = ({ message }) => {
  return <div>{message.text}</div>
}
const RoomMessages = () => {
  const { selectedRoom, getMessagesOfSelectedRoom, messages } =
    useContext(ChatContext)

  useEffect(() => {
    getMessagesOfSelectedRoom(selectedRoom)
    //eslint-disable-next-line
  }, [selectedRoom])

  return messages.map(message => (
    <RoomMessage key={message.id} message={message} />
  ))
}
export default RoomMessages
