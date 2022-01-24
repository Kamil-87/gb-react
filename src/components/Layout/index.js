
import {Navbar} from "../Navbar";
import {ThemeProvider, createTheme} from '@mui/material/styles';

const navMenu = [
  {
    id: 1,
    path: '/profile',
    title: 'Профиль',
  },
  {
    id: 2,
    path: '/chats',
    title: 'Чаты',
  }
];


export const Layout = ({children}) => {
  return (
    <>
        <Navbar
          menu={navMenu}
        />

        <ThemeProvider
          sx={{ mt: 4, mb: 2 }}
          theme={createTheme({
            palette: {
              mode: 'dark',
              primary: {main: 'rgb(102, 157, 246)'},
              background: {paper: 'rgb(5, 30, 52)'},
            },
          })}
        >
          {children}
        </ThemeProvider>
    </>
  );
};
