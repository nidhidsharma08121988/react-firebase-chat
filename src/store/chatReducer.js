import { SET_ROOMS, SET_USER } from './types'

const chatReducer = (state, action) => {
  switch (action.type) {
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
