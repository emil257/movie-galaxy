
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
  MOVIE_ON_START_GET_MOVIE_VIDEOS_BY_ID,
  MOVIE_ON_ERROR_GET_MOVIE_VIDEOS_BY_ID,
  MOVIE_ON_GET_MOVIE_VIDEOS_BY_ID,

  MOVIE_ON_ADD_TO_FAVORITES,
  MOVIE_ON_REMOVE_FROM_FAVORITES,
  MOVIE_ON_ADD_TO_WATCHLIST,
  MOVIE_ON_REMOVE_FROM_WATCHLIST
} from '../constants/actionTypes'

export const INIT_STATE = {
  movieResults: [],
  movieResultsCount: 0,
  movieFavoritesArr: [],
  movieWatchlist: [],
  currentMovie: null,
  currentMovieVideos: null,
  loading: false
};

const movieReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case MOVIE_ON_START_SEARCH: {
      console.log("MOVIE_ON_START_SEARCH", action.payload)
      return {
        ...state,
        movieResults: [],
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
        movieResults: [],
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
    case MOVIE_ON_START_GET_MOVIE_VIDEOS_BY_ID: {
      console.log("MOVIE_ON_START_GET_MOVIE_VIDEOS_BY_ID", action.payload)
      return {
        ...state,
        currentMovieVideos: [],
        loading: true
      }
    }
    case MOVIE_ON_ERROR_GET_MOVIE_VIDEOS_BY_ID: {
      console.log("MOVIE_ON_ERROR_GET_MOVIE_VIDEOS_BY_ID", action.payload)
      return {
        ...state,
        currentMovieVideos: [],
        loading: false
      }
    }
    case MOVIE_ON_GET_MOVIE_VIDEOS_BY_ID: {
      console.log("MOVIE_ON_GET_MOVIE_VIDEOS_BY_ID", action.payload)
      return {
        ...state,
        currentMovieVideos: action.payload,
        loading: false
      }
    }
    case MOVIE_ON_ADD_TO_FAVORITES: {
      console.log("MOVIE_ON_ADD_TO_FAVORITES", action.payload)
      return {
        ...state,
        movieFavoritesArr: [...state.movieFavoritesArr, action.payload],
      }
    }
    case MOVIE_ON_REMOVE_FROM_FAVORITES: {
      console.log("MOVIE_ON_REMOVE_FROM_FAVORITES", action.payload)
      return {
        ...state,
        movieFavoritesArr: state.movieFavoritesArr.filter(mFA => mFA !== action.payload),
      }
    }
    case MOVIE_ON_ADD_TO_WATCHLIST: {
      console.log("MOVIE_ON_ADD_TO_WATCHLIST", action.payload)
      return {
        ...state,
        movieWatchlist: [...state.movieWatchlist, action.payload],
      }
    }
    case MOVIE_ON_REMOVE_FROM_WATCHLIST: {
      console.log("MOVIE_ON_REMOVE_FROM_WATCHLIST", action.payload)
      return {
        ...state,
        movieWatchlist: state.movieWatchlist.filter(mWl => mWl.id !== action.payload),
      }
    }
    default:
      return state 
  }
}
export default movieReducer