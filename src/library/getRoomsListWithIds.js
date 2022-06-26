import { getUserRoomsFromDatabase } from '../backend/getUserRoomsFromDatabase'

export function getRoomsListWithIds() {
  const rooms = getUserRoomsFromDatabase()
  const roomIds = Object.keys(rooms)

  return roomIds.map(roomId => ({
    ...rooms[roomId],
    id: roomId,
  }))
}
