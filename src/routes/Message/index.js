import {Box, Container} from "@mui/material";
import {MessageList} from "../../components/message/MessageList/MessageList";
import {MessageInput} from "../../components/message/MessageInput/MessageInput";
import {useEffect} from "react";
import {nanoid} from "nanoid";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getChatMessagesById} from "../../store/messages/selectors";
import {addMessage} from "../../store/messages";

export const Messages = () => {
  const { chatId } = useParams()
  const dispatch = useDispatch()
  const messageList = useSelector(getChatMessagesById(chatId));

  const sendMessage = (author, text) => {
    const newMessage = {
      id: nanoid(),
      author,
      text
    }

    dispatch(addMessage(newMessage, chatId))
  }

  const onSendMessage = value => {
    sendMessage('user', value)
  }

  useEffect(() => {
    if (!messageList || messageList.length === 0) {
      return
    }

    const tail = messageList[messageList.length - 1]
    if (tail.author === 'bot') {
      return
    }

    if (tail.author === 'user') {
      setTimeout(() => {
        sendMessage('bot', 'Не приставай ко мне')
      }, 1500)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
        }}
      >
        <Container
          sx={{
            flexGrow: 0
          }}
        >
          <MessageList messageList={messageList} />
        </Container>
        <Box
          component="footer"
          sx={{
            flexBasis: '100%',
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <MessageInput onSend={onSendMessage} />
        </Box>
      </Box>
    </>
  )
}
