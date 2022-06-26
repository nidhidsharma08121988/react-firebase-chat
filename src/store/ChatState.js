import React, { createContext, useReducer } from 'react'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../backend/FirebaseModule'
import chatReducer from './chatReducer'
import { SET_MESSAGES, SET_ROOMS, SET_SELECTED_ROOM, SET_USER } from './types'
import { getRoomsListWithIds } from '../library/getRoomsListWithIds'
import { getMessageListWithIds } from '../library/getMessagesListWithIId'

const initialChatState = {
  user: null,
  rooms: [],
  messages: [],
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
    const rooms = getRoomsListWithIds()
    const messages = getMessageListWithIds()
    setRooms(rooms)
    setMessages(messages)
  }, [])

  useEffect(() => {
    setUser(user)
  }, [user])

  const setUser = user => {
    dispatch({
      type: SET_USER,
      payload: user,
    })
  }

  const setRooms = rooms => {
    dispatch({
      type: SET_ROOMS,
      payload: rooms,
    })
  }

  const setMessages = messages => {
    dispatch({
      type: SET_MESSAGES,
      payload: messages,
    })
  }

  const setSelectedRoom = room => {
    dispatch({
      type: SET_SELECTED_ROOM,
      payload: room,
    })
  }

  return (
    <ChatContext.Provider
      value={{
        ...state,
        setSelectedRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatState
