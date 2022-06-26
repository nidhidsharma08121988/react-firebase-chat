import { getUserMessagesFromDatabase } from '../backend/getUserMessagesFromDatabase'

export function getMessageListWithIds() {
  const messages = getUserMessagesFromDatabase()
  const messageIds = Object.keys(messages)

  return messageIds.map(messageId => ({
    ...messages[messageId],
    id: messageId,
  }))
}
