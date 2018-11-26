import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class LeftPane extends Component {

  constructor() {
      super();
      this.state = {
        name: '',
        avatar: '',
        bio: '',
        location: '',
        login: ''

      }
  }

  componentWillMount() {
      this.getProfileDetails();
  }

  getProfileDetails() {
    console.log("Getting profile details from github api: https://api.github.com/users/naorbar");
    fetch('https://api.github.com/users/naorbar')
			.then(response => response.json())
			.then(data => {
				this.setState({
          name: data.name,
          login: data.login,
          avatar: data.avatar_url,
          bio: data.bio,
          location: data.location
        })
		  })
			.catch(err => console.error(this.props.url, err.toString()))
	}

  render() {
    return (
      <Grid container justify="center" spacing={16}>
        <Grid item>
          <ProfilePicture />
          <div className="Name">{this.state.name}</div>
          <div className="Login">{this.state.login}</div>
          <div className="Bio">{this.state.bio}</div>
          <div><Button fullWidth={true}>Edit bio</Button></div>
          <div><Button fullWidth={true}>More details and links here</Button></div>
          <hr></hr>
          <div>
            <svg width="12" height="15"><path d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
            <span className="Location"> {this.state.location}</span>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default LeftPane;
