import {Box, Container} from "@mui/material";
import {MessageList} from "../../components";
import {NewMessage} from "../../components/new-message";
import {useEffect, useState} from "react";
import {nanoid} from "nanoid";

const messageListInit = {
  id: '1',
  author: 'user',
  text: 'test'
}

export const Messages = () => {
  const [messageList, setMessageList] = useState([messageListInit])

  const sendMessage = (author, text) => {
    console.log('sendMessage', text)
    const newMessageList = [...messageList]
    const newMessage = {
      id: nanoid(),
      author,
      text
    }

    newMessageList.push(newMessage)
    setMessageList(newMessageList)
  }

  useEffect(() => {
    if (messageList.length === 0) {
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
          <NewMessage onSend={sendMessage} />
        </Box>
      </Box>
    </>
  )
}