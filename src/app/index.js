import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import {ThemeProvider } from '@mui/material/styles'
import {theme} from '../theme'
import Navigation from '../components/Naviagtion'
import AppContainer from '../components/AppContainer'
import {routes} from './routes/routeData'


class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navigation />
        <AppContainer>
          <Switch>
            {
              routes.map((r, index) => {
                return (
                  <Route
                    key={index}
                    exact={r.exact}
                    path={r.path}
                    component={r.component}
                  />
                )
              })
            }
          </Switch>
        </AppContainer>
      </ThemeProvider>
    )
  }
}
export default withRouter(App);
