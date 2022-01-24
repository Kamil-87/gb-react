import React, {useState} from "react"
import {ChatItem} from './chat-item'
import {List} from "@mui/material"

export const ChatList = () => {
  const [selectedIndex, setSelectedIndex] = useState(1)

  const chats = [
    {chatId: '1', label: 'chat 1'},
    {chatId: '2', label: 'chat 2'}
  ]

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      sx={{width: '100%', height: '100%', bgcolor: 'rgb(5, 30, 52)'}}
    >
      {
        chats.map((chat) => {
          return (
            <ChatItem
              key={chat.chatId}
              selected={selectedIndex === chat.chatId}
              onClick={(event) => handleListItemClick(event, chat.chatId)}
              id={chat.chatId}
              title={chat.label}
            />
          )
        })
      }
    </List>
  )
}