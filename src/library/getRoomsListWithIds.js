import { getAllRoomsWithIdFromDatabase } from '../backend/FirebaseModule'

export const getRoomsListWithIds = async user => {
  const allRoomsList = await getAllRoomsWithIdFromDatabase()
  const roomsOfUser = allRoomsList.filter(room =>
    room.participants.includes(user.email)
  )
  return roomsOfUser
}
