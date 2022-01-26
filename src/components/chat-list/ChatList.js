import React, {useState} from "react"
import {ChatItem} from './chat-item'
import {List} from "@mui/material"
import {CHATS} from "../../mocks/chats";

export const ChatList = () => {
  const [selectedIndex, setSelectedIndex] = useState(1)

  const chats = [
    {id: '1', label: 'chat 1'},
    {id: '2', label: 'chat 2'},
    ...CHATS
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
        chats.map(({id, label}) => {
          return (
            <ChatItem
              key={id}
              selected={selectedIndex === id}
              onClick={(event) => handleListItemClick(event, id)}
              id={id}
              title={label}
            />
          )
        })
      }
    </List>
  )
}