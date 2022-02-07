import propTypes from 'prop-types'
import {Message} from './message'
import {List} from "@mui/material"

export const MessageList = props => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360
      }}
    >
        {
          props.messageList.map(message =>
            (
              <Message
                key={message.id}
                {...message}
              />
            ))
        }
    </List>
  )
}

MessageList.defaultProps = {
  messageList: []
}

MessageList.propTypes = {
  messageList: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      author: propTypes.string,
      text: propTypes.string
    })
  )
}
