import React, { Component } from 'react';
import RightPaneContent from './RightPaneContent';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

// This is an example of how to customize material-ui CSS (inline):
const tabStyle = {
  height: '8px',
  textTransform: 'capitalize',
  fontSize: '16px',
};

class RightPane extends Component {

  constructor() {
    super();
    this.state = {
      messageCount: 1,
      tabname: '/Overview'
    }
  }

  handleChange(event, value) {
    console.log("Tab Changed..." + event + " - " + value);
    this.setState({
      tabname: value
    });
  }

  render() {
    return (
      <div>
        <Tabs onChange={(e, val) => this.handleChange(e, val)}>
            <Tab label="Overview" value="/Overview" style={tabStyle}/><span className='Counter'>{this.state.messageCount}</span>
            <Tab label="Repositories" value="/Repositories" style={tabStyle}/>
            <Tab label="Stars" value="/Stars" style={tabStyle}/>
            <Tab label="Followers" value="/Followers" style={tabStyle}/>
            <Tab label="Following" value="/Following" style={tabStyle}/>
        </Tabs>
        <RightPaneContent tabname={this.state.tabname}/>
      </div>
    );
  }
}

export default RightPane;
