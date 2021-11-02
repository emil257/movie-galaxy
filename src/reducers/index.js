import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import Movies from './movies'

export default (history) => 
combineReducers({
  router: connectRouter(history),
  Movies: Movies
})