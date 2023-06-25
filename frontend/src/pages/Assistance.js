import * as React from 'react';
import MenuAppBar from '../components/MenuAppBar';
import "@fontsource/inter"; // Defaults to weight 400
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: yellow,
  },
  typography: {
    fontFamily: 'Inter',
  }
})

function Assistance() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <Typography variant="h1">
        Assistance
      </Typography>
    </ThemeProvider>
  )
}
export default Assistance;