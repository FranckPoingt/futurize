import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#3282B8',
        },
        secondary: {
          main: '#BBE1FA',
        },
        background: {
          default: '#1B262C',
        },
        info: {
          main: '#2196f3',
        },
      },
      typography: {
        h1: {
          fontFamily: 'Bungee',
          fontSize: '4.4rem',
        },
        body1: {
          fontFamily: 'Montserrat',
        },
        body2: {
          fontFamily: 'Montserrat',
        },
        button: {
            fontFamily: 'Montserrat',
            fontWeight: 'bolder',
        }
      },
})
