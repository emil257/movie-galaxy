import { render, cleanup, screen } from '@testing-library/react';
import {store} from 'store'
import movieReducer, {INIT_STATE} from  'reducers/movies'
import * as types from 'constants/actionTypes'
import  {Provider } from 'react-redux'
import MovieDetailsDialog from '../MovieResluts/MovieDetailsDialog'
import MovieReslutItem from '../MovieResluts/MovieReslutItem'
import MovieResultsGrid from '../MovieResluts/MovieResultsGrid'
import MovieResultsItemActions from '../MovieResluts/MovieResultsItemActions'

// configure({ adapter: new Adapter() });

afterEach(cleanup)

function renderWithRedux(component) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

const testMovieObj = {
  original_language: "en",
  original_title: "Dune",
  poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  title: "test_title",
  video: false,
  vote_average: 8,
  overview: "test_overview",
  release_date: "2021-09-15",
  vote_count: 3267,
  adult: false,
  backdrop_path: "/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg",
  id: 438631,
  genre_ids: [
    28,
    12,
    18,
    878
  ],
  popularity: 4002.42,
  media_type: "movie"
}

describe('Test movie results actions (redux)', () => {
  const movieStateAfterAddFavorites = movieReducer(INIT_STATE, {type: types.MOVIE_ON_ADD_TO_FAVORITES, payload: 42})
  it('Should add to favorites', () => {
    expect(movieStateAfterAddFavorites.movieFavoritesArr).toEqual([42])
  })
  it('Should remove from favorites', () => {
    const movieStateAfterRemoveFavorite = movieReducer(movieStateAfterAddFavorites, {type: types.MOVIE_ON_REMOVE_FROM_FAVORITES, payload: 42})
    expect(movieStateAfterRemoveFavorite.movieFavoritesArr).toEqual([])
  })
  const movieStateAfterAddToWatchlist = movieReducer(INIT_STATE, {type: types.MOVIE_ON_ADD_TO_WATCHLIST, payload: testMovieObj})
  it('Should add movie to watchlist', () => {
    expect(movieStateAfterAddToWatchlist.movieWatchlist).toEqual([testMovieObj])
  })
  it('Should remove movie to watchlist', () => {
    const movieStateAfterRemoveFavorite = movieReducer(movieStateAfterAddFavorites, {type: types.MOVIE_ON_REMOVE_FROM_WATCHLIST, payload: testMovieObj.id})
    expect(movieStateAfterRemoveFavorite.movieWatchlist).toEqual([])
  })
})

describe('Check if components renders with redux', () => {
  it('Should render MovieDetailsDialog component', () => {
    const component = renderWithRedux(<MovieDetailsDialog/>)
    expect(component).toBeDefined()
  })
  it('Should render MovieReslutItem component', async () => {
    const component = renderWithRedux(<MovieReslutItem movie={testMovieObj}/>)
    expect(component).toBeDefined()
  })
  it('Should render MovieResultsGrid component with MovieResultsItems',async () => {
    const component = renderWithRedux(<MovieResultsGrid  movies={[testMovieObj]}/>)
    expect(component).toBeDefined()
    const movieGridChild = await screen.findByTestId('movie-grid-child')
    expect(movieGridChild).toBeDefined()
  })
  it('Should render MovieResultsItemActions component', () => {
    const component = renderWithRedux(<MovieResultsItemActions movie={testMovieObj}/>)
    expect(component).toBeDefined()
  })
})

