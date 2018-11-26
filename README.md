
### This project implements the GitHub profile page with GitHub's API and material-ui

- GitHub's Profile Page Sample: https://github.com/naorbar
- GitHub's API Sample: https://api.github.com/users/naorbar

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app); i.e. `npx crete-react-app <app_name>`

#### To use material-ui:
- Install material-ui dependencies:
  ```
  npm install @material-ui/core
  npm install @material-ui/icons
  ```
- Import the items you'd like to use:
  ```
  import Grid from '@material-ui/core/Grid';
  import Button from '@material-ui/core/Button';
  ```
- Use the items in your Render() function:
  ```
  <Grid container justify="center" spacing={16}>
    <Grid item>
    ...
      <Button fullWidth={true}>Edit bio</Button>
    ...
    </Grid>
  </Grid>
  ```
#### To start working on this project:
- `git clone` to clone the project
- `cd` to the app folder
- `npm install` to install all dependencies into the app folder
- `npm start` to start the server on http://localhost:3000
- open the project using Atom or any other IDE
