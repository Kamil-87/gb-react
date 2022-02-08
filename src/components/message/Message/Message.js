import React from "react";
import propTypes from "prop-types";
import { ListItem, ListItemText } from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
  primary: {
    color: '#fff'
  }
}))

export const Message = props => {
  const classes = useStyles()

  return (
    <ListItem>
      <ListItemText
        className={classes.primary}
        primary={props.author}
        secondary={props.text}
      />
    </ListItem>
  )
}

Message.propTypes = {
  text: propTypes.string,
  author: propTypes.string
};
