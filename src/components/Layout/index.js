
import {Navbar} from "../Navbar";
import {ThemeProvider, createTheme} from '@mui/material/styles';

const navMenu = [
  {
    id: 1,
    path: '/',
    title: 'Главная',
  },
  {
    id: 2,
    path: '/profile',
    title: 'Профиль',
  },
  {
    id: 3,
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
