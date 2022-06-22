import React, { createContext, useReducer } from 'react'
import chatReducer from './chatReducer'

const initialChatState = {
  rooms: [],
  selectedRoom: '',
}

export const ChatContext = createContext(initialChatState)

const ChatState = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialChatState)
  return (
    <ChatContext.Provider
      value={{ rooms: state.rooms, selectedRoom: state.selectedRoom }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatState
