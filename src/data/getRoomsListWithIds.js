import { getRoomsFromDatabase } from './getRoomsFromDatabase'

export function getRoomsListWithIds() {
  const rooms = getRoomsFromDatabase()
  const roomIds = Object.keys(rooms)

  return roomIds.map(roomId => ({
    ...rooms[roomId],
    id: roomId,
  }))
}
