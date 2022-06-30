export function getMessagesForRoom(allMessages, selectedRoom) {
  return allMessages.filter(message => message.roomId === selectedRoom.id)
}
