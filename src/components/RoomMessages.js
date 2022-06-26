import { useEffect } from 'react'
import { useContext } from 'react'
import { ChatContext } from '../store/ChatState'

const RoomMessages = () => {
  const { selectedRoom, getMessagesOfSelectedRoom, messages } =
    useContext(ChatContext)
  useEffect(() => {
    getMessagesOfSelectedRoom(selectedRoom)
  }, [selectedRoom])
  return messages.map(message => <div>{message.text}</div>)
}
export default RoomMessages
