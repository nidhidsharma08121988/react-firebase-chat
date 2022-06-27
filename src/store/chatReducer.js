import {
  SET_LOGGED_IN,
  SET_MESSAGES,
  SET_ROOMS,
  SET_SELECTED_ROOM,
  SET_USER,
} from './types'

const chatReducer = (state, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      }
    case SET_SELECTED_ROOM:
      return {
        ...state,
        selectedRoom: action.payload,
      }
    case SET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export default chatReducer
