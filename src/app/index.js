import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import {ThemeProvider } from '@mui/material/styles'
import {theme} from '../theme'
import Navigation from '../components/Naviagtion'
import AppContainer from '../components/AppContainer'

import HomePage from './routes/HomePage'
import WatchLater from './routes/testpage'

class App extends Component {

  componentDidMount() {
    console.log(this.props.match)
  }

  render() {
    const {
      match,
    } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Navigation />
        <AppContainer>
          <Switch>
            <Route
              path={`${match.url}/watchlater`}
              component={WatchLater}
            />
            <Route
              path={`${match.url}/`}
              component={HomePage}
            />
          </Switch>
        </AppContainer>
      </ThemeProvider>
    )
  }
}
export default withRouter(App);
