import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import Movies from './movies'

const redux = (history) => 
combineReducers({
  router: connectRouter(history),
  Movies: Movies
})
export default redux