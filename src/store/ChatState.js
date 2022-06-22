import React, { createContext, useReducer } from 'react'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../backend/FirebaseModule'
import chatReducer from './chatReducer'
import { SET_USER } from './types'

const initialChatState = {
  user: null,
  rooms: [],
  selectedRoom: {
    id: '',
    title: '',
    participants: [],
  },
}

export const ChatContext = createContext(initialChatState)

const ChatState = ({ children }) => {
  const [user] = useAuthState(auth)

  const [state, dispatch] = useReducer(chatReducer, initialChatState)
  useEffect(() => {
    setUser(user)
  }, [user])

  const setUser = user => {
    console.log(user)
    dispatch({
      type: SET_USER,
      payload: user,
    })
  }
  return (
    <ChatContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatState
