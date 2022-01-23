import {useEffect, useState} from "react";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Box, Container, Grid, Divider} from "@mui/material";
import {ChatList, MessageList} from "../components";
import { nanoid } from 'nanoid'
import {NewMessage} from "../components/new-message";

const messageListInit = {
  id: '1',
  author: 'user',
  text: 'test'
}

export const Chat = () => {
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
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: 'dark',
            primary: {main: 'rgb(102, 157, 246)'},
            background: {paper: 'rgb(5, 30, 52)'},
          },
        })}
      >
        <Grid container alignItems="center" wrap="nowrap" sx={{height: '100%', mx: 'auto'}}>
          <Grid item sx={{width: '100%', height: '100%', maxWidth: 256}}>
            <Box sx={{width: '100%', height: '100%'}}>
              <ChatList />
            </Box>
          </Grid>

          <Divider orientation="vertical" flexItem />
          <Grid
            item
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Container>
                <MessageList
                  messageList={messageList}
                />
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
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}