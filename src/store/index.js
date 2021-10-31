
import {createBrowserHistory} from 'history'
import {applyMiddleware, compose, createStore} from 'redux';
import { connectRouter, routerMiddleware} from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import reducers from '../reducers/index'

const history = createBrowserHistory();
const middleware = [
  thunk,
  routerMiddleware(history)
]
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export const store = createStore(
  connectRouter(history)(reducers(history)),
  composedEnhancers
)
export { history }
