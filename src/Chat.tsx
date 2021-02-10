import React from 'react';
import { Widget, addResponseMessage, toggleWidget, toggleInputDisabled } from 'react-chat-widget';
import { Paper, Grid, ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import fetch from './fetch'

import './ChatWidgetStyles.css';

const useStyles = makeStyles(theme => {
  console.log(theme)
  return ({
    root: {
      height: '100%',
      backgroundColor: theme.palette.background.default,
    },
    '@global': {
      '.rcw-header': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main)
      },
      '.rcw-messages-container': {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.getContrastText(theme.palette.background.paper)
      },
      '.rcw-response .rcw-message-text': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main)
      },
      '.rcw-new-message': {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.getContrastText(theme.palette.background.paper)
      },
      '.rcw-sender': {
        backgroundColor: theme.palette.background.paper,
      },
      '.rcw-send': {
        backgroundColor: theme.palette.background.paper,
      }
    }
  })
})

const getLastMessage = (history: string): string => {
  const index = history.lastIndexOf("Bruno Pommier:")
  console.log({ index })
  return history.substring(index)
}

function Chat() {
  const classes = useStyles()
  const [launcherOpen, setLauncherOpen] = React.useState(false);
  const [history, setHistory] = React.useState('');
  const handleNewUserMessage = (message: string) => {
    toggleInputDisabled();
    fetch(history,
      message
    ).then(newHistory => {
      setHistory(newHistory);
      toggleInputDisabled();
      addResponseMessage(getLastMessage(newHistory))
    });
  }

  React.useEffect(() => {
    if (!launcherOpen) {
      toggleWidget()
      setLauncherOpen(true)
    }
  }, [])

  console.log({ history })
  return (
    <Paper square className={classes.root}>
      <Grid container direction="column">
        <Grid item>
          <Widget handleNewUserMessage={handleNewUserMessage}
            title="Bruno Pommier's resume"
            subtitle="Ask me anything"
          />
        </Grid>
        <Grid container item spacing={2} justify="center" alignItems="center">
          <Grid item>
            <a href="https://github.com/Nauss"><img src="GitHub-Mark-Light-32px.png" /></a>
          </Grid>
          <Grid item>
            <a href="https://twitter.com/TheNauss"><img src="2021 Twitter logo - white.png" style={{ width: '32px', }} /></a>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Chat;
