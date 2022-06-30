import { getAllMessagesWithIdFromDatabase } from './../backend/FirebaseModule'

export const getMessageListWithIds = async () => {
  const messages = await getAllMessagesWithIdFromDatabase()

  return messages
}
