import { getMessagesFromDatabase } from '../backend/getMessagesFromDatabase'

export function getMessageListWithIds() {
  const messages = getMessagesFromDatabase()
  const messageIds = Object.keys(messages)

  return messageIds.map(messageId => ({
    ...messages[messageId],
    id: messageId,
  }))
}
