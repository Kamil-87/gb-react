import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
  primary: {
    color: '#fff'
  }
}))

export const Message = props => {
  const classes = useStyles()
  const {author, text} = props.message

  return (
    <ListItem>
      <ListItemText
        className={classes.primary}
        primary={author}
        secondary={text}
      />
    </ListItem>
  )
}
