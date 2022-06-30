import { getAllMessagesWithIdFromDatabase } from './../backend/FirebaseModule'

export const getMessageListWithIds = async () => {
  const messages = await getAllMessagesWithIdFromDatabase()
  const messageIds = Object.keys(messages)
  const allMessagesList = messageIds.map(messageId => ({
    ...messages[messageId],
    id: messageId,
  }))

  return allMessagesList
}
