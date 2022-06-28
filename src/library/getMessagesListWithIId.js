import { getUserMessagesFromDatabase } from '../backend/getUserMessagesFromDatabase'

export function getMessageListWithIds() {
  const messages = getUserMessagesFromDatabase()
  const messageIds = Object.keys(messages)
  const allMessagesList = messageIds.map(messageId => ({
    ...messages[messageId],
    id: messageId,
  }))

  return allMessagesList
}
