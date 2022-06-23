import React, { createContext, useReducer } from 'react'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../backend/FirebaseModule'
import chatReducer from './chatReducer'
import { SET_ROOMS, SET_SELECTED_ROOM, SET_USER } from './types'
import { getRoomsListWithIds } from './getRoomsListWithIds'

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
    const rooms = getRoomsListWithIds()
    setRooms(rooms)
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
