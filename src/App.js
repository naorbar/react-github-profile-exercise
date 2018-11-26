import React, { Component } from 'react';
import './App.css';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="inherit" position="static" className="AppBar">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Button color="inherit">Pull Requests</Button>
            <Button color="inherit">Issues</Button>
            <Button color="inherit">Market Place</Button>
            <Button color="inherit">Explore</Button>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" spacing={16} hs={20}>
          <Grid item>
            <LeftPane className="LeftPane"></LeftPane>
          </Grid>
          <Grid item>
            <RightPane className="RightPane"></RightPane>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
