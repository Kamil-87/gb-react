
import {Box, Grid, Divider} from "@mui/material";
import {ChatList} from '../../components'
import {Messages} from "../Messages";

export const Chat = () => {

  return (
    <>
      <Grid container alignItems="center" wrap="nowrap" sx={{height: 'calc(100% - 68.5px)', mx: 'auto'}}>
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