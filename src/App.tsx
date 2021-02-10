import React from 'react';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple';

import Chat from './Chat';

import './App.css';
import './ChatWidgetStyles.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4e1777',
    },
    secondary: {
      main: deepPurple[900],
    },
    type: 'dark'
  },
},
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Chat />
    </ThemeProvider>
  );
}

export default App;
