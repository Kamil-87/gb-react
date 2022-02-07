import {Box, Container} from "@mui/material";
import {MessageList} from "../../components";
import {NewMessage} from "../../components/message-list/new-message";
import {useEffect} from "react";
import {nanoid} from "nanoid";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getChatMessagesById} from "../../store/messages/selectors";
import {addMessage} from "../../store/messages";

// const messageListInit = {
//   id: '1',
//   author: 'user',
//   text: 'test'
// }

export const Messages = () => {
  const { chatId } = useParams()
  const dispatch = useDispatch()
  const messageList = useSelector(getChatMessagesById(chatId));

  console.log('useSelector', useSelector(getChatMessagesById(chatId)))

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

  console.log('messageListqweqeqe', messageList)

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
          messageList <pre>{messageList}</pre>
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
          <NewMessage onSend={onSendMessage} />
        </Box>
      </Box>
    </>
  )
}
