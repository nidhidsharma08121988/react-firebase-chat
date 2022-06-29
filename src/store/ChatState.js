import React, { createContext, useReducer } from 'react'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../backend/FirebaseModule'
import chatReducer from './chatReducer'
import {
  SET_LOGGED_IN,
  SET_MESSAGES,
  SET_ROOMS,
  SET_SELECTED_ROOM,
  SET_USER,
} from './types'
import { getRoomsListWithIds } from '../library/getRoomsListWithIds'
import { getMessageListWithIds } from '../library/getMessagesListWithIId'

let allMessages = []

const initialChatState = {
  user: null,
  rooms: [],
  messages: [],
  selectedRoom: {
    id: '',
    title: '',
    participants: [],
  },
  isLoggedIn: false,
}

export const ChatContext = createContext(initialChatState)

const ChatState = ({ children }) => {
  const [user] = useAuthState(auth)
  const [state, dispatch] = useReducer(chatReducer, initialChatState)

  useEffect(() => {
    setUser(user)
    if (user) {
      setUserRoomsAndMessages()
    } else {
      setLoggedIn(false)
    }

    async function setUserRoomsAndMessages() {
      setLoggedIn(true)
      const rooms = await getRoomsListWithIds(user)
      setRooms(rooms)
      const defaultSelectedRoom = rooms !== [] ? rooms[0] : []
      setSelectedRoom(defaultSelectedRoom)
      allMessages = await getMessageListWithIds()
    }
  }, [user])

  const setMessagesOfSelectedRoom = selectedRoom => {
    const messagesOfSelectedRoom = allMessages.filter(
      message => message.roomId === selectedRoom.id
    )
    setMessages(messagesOfSelectedRoom)
  }

  const setLoggedIn = isLoggedIn => {
    dispatch({
      type: SET_LOGGED_IN,
      payload: isLoggedIn,
    })
  }
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
        setMessagesOfSelectedRoom: setMessagesOfSelectedRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatState
