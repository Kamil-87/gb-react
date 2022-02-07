import React from "react"
import { Link } from "react-router-dom"

import {ListItemButton, ListItemText} from "@mui/material"
import {Delete} from "@mui/icons-material"
import Button from "@mui/material/Button"

export const ChatItem = ({onClick, id, label}) => {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <ListItemButton
        component={Link}
        to={`/chats/${id}`}
        sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
      >
        <ListItemText
          color="inherit"
          primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', color: 'white' }}
        >
         {label}
        </ListItemText>
      </ListItemButton>
      <Button
        color={'error'}
        onClick={onClick} >
        <Delete color="inherit"/>
      </Button>
    </div>
  )
}
