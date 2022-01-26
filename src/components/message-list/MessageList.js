import propTypes from 'prop-types'
import {Message} from './message'
import {List} from "@mui/material"
import {useParams} from "react-router-dom";

export const MessageList = props => {
  console.log('useParams', useParams())

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360
      }}
    >
        {
          props.messageList.map(message => {
            return (
              <Message
                key={message.id}
                message={message}
              />
            )
          })
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
