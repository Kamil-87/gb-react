import React from "react"
import { ChatItem } from '../ChatItem/ChatItem'
import {Button, List} from "@mui/material"

export const ChatList = ({chats, onDeleteChat, onAddChat}) => {
  return (
    <div style={{width: '100%', height: '100%', background: 'rgb(5, 30, 52)'}}>
      <List
        component="nav"
        aria-label="main mailbox folders"
      >
        {chats.map((chat) =>
            (<ChatItem
                key={chat.id}
                onClick={() => onDeleteChat(chat.id)}
                {...chat}
              />))
        }
      </List>

      <Button
        color={'success'}
        fullWidth
        onClick={() => {
          onAddChat()
        }}
      >Добавить чат</Button>
    </div>
  )
}
