import * as React from 'react';
import "@fontsource/inter"; // Defaults to weight 400
import '../Home.css';
import {
  Typography,
  Divider,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import MenuAppBar from '../components/MenuAppBar';
import StampCollection from '../components/StampCollection';
import MenuButtons from '../components/MenuButtons';

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

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Home">
        <MenuAppBar className="Menubar" />
        <div className="stamp-title">
          <Typography>
            <h2><b>My Stamp Collection</b></h2>
          </Typography>
        </div>
        <StampCollection />
        <div alignItems="center" justifyContent="center">
          <Divider
            light
            sx={{
              mt: 3,
              mb: 3,
              mx: 7,
            }}
          />
        </div>
        <MenuButtons />
      </div>
    </ThemeProvider>
  );
}
export default Home;
