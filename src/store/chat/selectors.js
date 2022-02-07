import {compareById} from "../../helpers";

export const getChat = state => state.chat
export const getChatList = state => getChat(state).chats

export const getChatById = (chatId) => (state) => getChatList(state).filter(compareById(chatId));
