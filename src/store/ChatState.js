import React, { createContext, useReducer } from 'react'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../backend/FirebaseModule'
import chatReducer from './chatReducer'
import {
  ADD_MESSAGE,
  SET_LOGGED_IN,
  SET_MESSAGES,
  SET_ROOMS,
  SET_SELECTED_ROOM,
  SET_USER,
} from './types'
import { getRoomsListWithIds } from '../library/getRoomsListWithIds'
import { getMessageListWithIds } from '../library/getMessagesListWithIId'
import { getMessagesForRoom } from '../library/getMessagesForRoom'

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
      await setMessagesOfSelectedRoom(defaultSelectedRoom)
    }
    //eslint-disable-next-line
  }, [user])

  const setMessagesOfSelectedRoom = async selectedRoom => {
    const allMessages = await getMessageListWithIds()
    const messagesOfSelectedRoom = getMessagesForRoom(allMessages, selectedRoom)
    // sort in ascending order of date
    messagesOfSelectedRoom.sort((m1, m2) => {
      return m1.created - m2.created
    })
    setMessages(messagesOfSelectedRoom)
  }

  const updateRoom = (roomId, updatedPropertiesObject) => {
    const oldRoom = state.rooms.filter(room => room.id === roomId)[0]
    const updatedRoom = {
      ...oldRoom,
      ...updatedPropertiesObject,
    }
    const remainingRooms = state.rooms.filter(room => room.id !== roomId)
    const updatedRoomsList = [...remainingRooms, updatedRoom]
    setRooms(updatedRoomsList)
  }

  const addNewRoom = room => {
    const updateListOfRooms = [...state.rooms, room]
    setRooms(updateListOfRooms)
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

  const addMessage = message => {
    dispatch({
      type: ADD_MESSAGE,
      payload: message,
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
        setMessagesOfSelectedRoom,
        addMessage,
        addNewRoom,
        updateRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatState
