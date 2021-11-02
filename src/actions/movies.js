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
} from 'constants/actionTypes'

import axios from 'util/api';

export const searchMovies = (query, page) => {
  return(dispatch) => {
    dispatch({type: MOVIE_ON_START_SEARCH })
    axios.get('search/movie', {params: {
      query, page
    }}).then(({data}) => {
      if(data) dispatch({type: MOVIE_ON_SEARCH, payload: data })
      else dispatch({type: MOVIE_ON_ERROR_SEARCH })
    }).catch(err => {
      dispatch({type: MOVIE_ON_ERROR_SEARCH, payload: err })
    })
  }
}
export const getTrendingMovies = (page) => {
  return(dispatch) => {
    dispatch({type: MOVIE_ON_START_GET_TRENDING })
    axios.get('trending/movie/week', {params: {
      page
    }}).then(({data}) => {
      if(data) dispatch({type: MOVIE_ON_GET_TRENDING, payload: data })
      else dispatch({type: MOVIE_ON_ERROR_GET_TRENDING })
    }).catch(err => {
      dispatch({type: MOVIE_ON_ERROR_GET_TRENDING, payload: err })
    })
  }
}
export const getMovieById = (id) => {
  return(dispatch) => {
    dispatch({type: MOVIE_ON_START_GET_MOVIE_BY_ID })
    axios.get(`movie/${id}'`, {params: {
    }}).then(({data}) => {
      if(data) dispatch({type: MOVIE_ON_GET_MOVIE_BY_ID, payload: data })
      else dispatch({type: MOVIE_ON_ERROR_GET_MOVIE_BY_ID })
    }).catch(err => {
      dispatch({type: MOVIE_ON_ERROR_GET_MOVIE_BY_ID, payload: err })
    })
  }
}