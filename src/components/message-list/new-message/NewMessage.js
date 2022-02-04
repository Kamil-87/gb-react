import { useState, useEffect, useRef } from "react"
import propTypes from 'prop-types'

import { Paper, IconButton, InputBase } from "@mui/material";
import { makeStyles } from '@mui/styles';
import SendIcon from "@mui/icons-material/Send";

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(3)
  },
  input: {
    flexGrow: 1
  }
}))

export const NewMessage = props => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const resetForm = () => {
    setValue('')
  }

  const onSubmit = event => {
    event.preventDefault()
    props.onSend(value)
    resetForm()
  }

  const onChangeInput = event => {
    setValue(event.target.value)
  }

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <Paper
      className={classes.paper}
      component="form"
      onSubmit={onSubmit}
    >
      <InputBase
        type="text"
        className={classes.input}
        inputRef={inputRef}
        value={value}
        onChange={onChangeInput}
      />
      <IconButton type="submit">
        <SendIcon />
      </IconButton>
    </Paper>
  )
}

NewMessage.defaultProps = {
  placeholder: 'Введите сообщение...'
}

NewMessage.propTypes = {
  onSend: propTypes.func,
  placeholder: propTypes.string
}
