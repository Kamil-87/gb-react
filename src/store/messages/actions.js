export const REMOVE_MESSAGES_BY_CHAT_ID = 'REMOVE_MESSAGES_BY_CHAT_ID'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (message, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
    chatId
  }
})

export const removeMessagesByChatId = chatId => ({
  type: REMOVE_MESSAGES_BY_CHAT_ID,
  payload: chatId
})
