import React, { Component } from 'react';
import '../App.css';

import Overview from './Overview';
import Repositories from './Repositories';
import Stars from './Stars';
import Followers from './Followers';
import Following from './Following';

class RightPaneContent extends Component {
  render() {
    if (this.props.tabname === '/Overview') {
      return (<Overview />);
    } else if (this.props.tabname === '/Repositories') {
      return (<Repositories />);
    } else if (this.props.tabname === '/Stars') {
      return (<Stars />);
    } else if (this.props.tabname === '/Followers') {
      return (<Followers />);
    } else if (this.props.tabname === '/Following') {
      return (<Following />);
    } else {
      return (<Overview />);
    }
  }
}

export default RightPaneContent;
