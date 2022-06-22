import React from 'react'
import { SET_USER } from './types'

const chatReducer = (state, action) => {
  switch (action.type) {
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
