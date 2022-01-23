import React, {useState} from "react"
import {ChatItem} from './chat-item'
import {List} from "@mui/material"

export const ChatList = () => {
  const [selectedIndex, setSelectedIndex] = useState(1)

  const chats = [
    {id: '1', label: 'chat 1'},
    {id: '2', label: 'chat 2'}
  ]

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
    console.log('index', index)
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
              key={chat.id}
              selected={selectedIndex === chat.id}
              onClick={(event) => handleListItemClick(event, chat.id)}
              label={chat.label}
            />
          )
        })
      }
    </List>
  )
}