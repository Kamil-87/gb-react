
import {Box, Grid, Divider} from "@mui/material";
import {ChatList} from '../../components'
import {Messages} from "../Messages";
import {useDispatch, useSelector} from "react-redux";
import {getChatList} from "../../store/chat/selectors";
import {removeChat, addChat, setChats} from "../../store/chat";
import {nanoid} from "nanoid";
import {CHATS} from "../../mocks/chats";
import {useEffect} from "react";

export const Chat = () => {
  const chats = useSelector(getChatList)
  const dispatch = useDispatch()

  const onDeleteChat = chatId => {
    console.log(chatId)
    dispatch(removeChat(chatId))
  }

  const onAddChat = () => {
    dispatch(addChat({
      id: nanoid(),
      label: 'chatName'
    }))
  }

  useEffect(() => {
    dispatch(setChats(CHATS))
  }, [])

  return (
    <>
      <Grid container alignItems="center" wrap="nowrap" sx={{height: 'calc(100% - 68.5px)', mx: 'auto'}}>
        <Grid item sx={{width: '100%', height: '100%', maxWidth: 256}}>
          <Box sx={{width: '100%', height: '100%'}}>
            <ChatList
              chats={chats}
              onDeleteChat={onDeleteChat}
              onAddChat={onAddChat}
            />
          </Box>
        </Grid>

        <Divider orientation="vertical" flexItem />
        <Grid
          item
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: 'background.paper',
          }}
        >
          <Messages />
        </Grid>
      </Grid>
    </>
  );
}
