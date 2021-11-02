
import {
  MOVIE_ON_START_SEARCH,
  MOVIE_ON_ERROR_SEARCH,
  MOVIE_ON_SEARCH,
  MOVIE_ON_START_GET_TRENDING,
  MOVIE_ON_ERROR_GET_TRENDING,
  MOVIE_ON_GET_TRENDING,
  MOVIE_ON_START_GET_MOVIE_BY_ID,
  MOVIE_ON_ERROR_GET_MOVIE_BY_ID,
  MOVIE_ON_GET_MOVIE_BY_ID,
} from '../constants/actionTypes'

const INIT_STATE = {
  movieResults: [],
  movieResultsCount: 0,
  currentMovie: null,
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case MOVIE_ON_START_SEARCH: {
      console.log("MOVIE_ON_START_SEARCH", action.payload)
      return {
        ...state,
        movieResultsCount: [],
        movieResultsCount: 0,
        loading: true
      }
    }
    case MOVIE_ON_ERROR_SEARCH: {
      console.log("MOVIE_ON_START_SEARCH", action.payload)
      return {
        ...state,
        movieResults: [],
        movieResultsCount: 0,
        loading: false
      }
    }
    case MOVIE_ON_SEARCH: {
      console.log("MOVIE_ON_START_SEARCH", action.payload)

      const {total_results, results} = action.payload

      return {
        ...state,
        movieResults: results,
        movieResultsCount: total_results,
        loading: false
      }
    }
    case MOVIE_ON_START_GET_TRENDING: {
      console.log("MOVIE_ON_START_GET_TRENDING", action.payload)
      return {
        ...state,
        movieResultsCount: [],
        movieResultsCount: 0,
        loading: true
      }
    }
    case MOVIE_ON_ERROR_GET_TRENDING: {
      console.log("MOVIE_ON_ERROR_GET_TRENDING", action.payload)
      return {
        ...state,
        movieResults: [],
        movieResultsCount: 0,
        loading: false
      }
    }
    case MOVIE_ON_GET_TRENDING: {
      console.log("MOVIE_ON_GET_TRENDING", action.payload)

      const {total_results, results} = action.payload

      return {
        ...state,
        movieResults: results,
        movieResultsCount: total_results,
        loading: false
      }
    }
    case MOVIE_ON_START_GET_MOVIE_BY_ID: {
      console.log("MOVIE_ON_START_GET_MOVIE_BY_ID", action.payload)
      return {
        ...state,
        currentMovie: null,
        loading: true
      }
    }
    case MOVIE_ON_ERROR_GET_MOVIE_BY_ID: {
      console.log("MOVIE_ON_ERROR_GET_MOVIE_BY_ID", action.payload)
      return {
        ...state,
        currentMovie: null,
        loading: false
      }
    }
    case MOVIE_ON_GET_MOVIE_BY_ID: {
      console.log("MOVIE_ON_GET_MOVIE_BY_ID", action.payload)
      return {
        ...state,
        currentMovie: action.payload,
        loading: false
      }
    }
    default:
      return state 
  }
}