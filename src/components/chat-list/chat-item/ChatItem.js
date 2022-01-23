import React from "react"

import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {AccountBox} from "@mui/icons-material";

export const ChatItem = (props) => {

  return (
      <ListItemButton
        selected={props.selected}
        onClick={props.onClick}
        sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
      >
        <ListItemIcon>
          <AccountBox color="inherit"/>
        </ListItemIcon>
        <ListItemText
          primary={props.label}
          color="inherit"
          primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', color: 'white' }}
        />
      </ListItemButton>
  )
}