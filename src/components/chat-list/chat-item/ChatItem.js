import React from "react"
import { Link } from "react-router-dom"

import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {AccountBox} from "@mui/icons-material";

export const ChatItem = (props) => {
  const {selected, onClick, chatId, title} = props

  return (
      <ListItemButton
        selected={selected}
        onClick={onClick}
        sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
      >
        <ListItemIcon>
          <AccountBox color="inherit"/>
        </ListItemIcon>
        <ListItemText
          color="inherit"
          primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', color: 'white' }}
        >
          <Link to={`/chats/${chatId}`} style={{color: 'white'}}>{title}</Link>
        </ListItemText>
      </ListItemButton>
  )
}