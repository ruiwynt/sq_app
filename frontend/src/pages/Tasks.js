import * as React from 'react';
import MenuAppBar from '../components/MenuAppBar';
import "@fontsource/inter"; // Defaults to weight 400
import { Box, Typography } from '@mui/material';
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

function Tasks() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <Box
        sx={{
          m: 4
        }}
      >
        <Typography variant="h3">
          Tasks
        </Typography>
        <Typography>
          <i> No current tasks. </i>
        </Typography>
      </Box>
    </ThemeProvider>
  )
}
export default Tasks;