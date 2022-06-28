import { getUserRoomsFromDatabase } from '../backend/getUserRoomsFromDatabase'

export function getRoomsListWithIds(user) {
  const rooms = getUserRoomsFromDatabase()
  const roomIds = Object.keys(rooms)
  const allRoomsList = roomIds.map(roomId => ({
    ...rooms[roomId],
    id: roomId,
  }))
  const roomsOfUser = allRoomsList.filter(room =>
    room.participants.includes(user.email)
  )
  return roomsOfUser
}
