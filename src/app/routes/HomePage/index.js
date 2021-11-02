import React from 'react'
import { useDispatch } from 'react-redux'
import {searchMovies, getTrendingMovies } from 'actions'
import { Typography, Box, IconButton, Tooltip,Grid  } from '@mui/material'
import SearchInput from './inputs/searchInput'
import MovieResultsGrid from '../../../components/MovieResluts/MovieResultsGrid'
import {Clear, TrendingUp, Search} from '@mui/icons-material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  clearButton: {
    marginLeft: '8px !important',
  },
  title: {
    marginLeft: 8
  }
});

export default function HomePage() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [searchText, setSearchText] = React.useState('')
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    dispatch(getTrendingMovies())
  }, [dispatch])

  const handleSearch = (text) => {
    setSearchText(text)
    setPage(1)
    dispatch(searchMovies(text, 1))
  }
  const clearSearch = () => {
    setSearchText('')
    setPage(1)
    dispatch(getTrendingMovies(1))
  }
  const handleSetPage = (value) => {
    setPage(value)
    if(searchText === '') dispatch(getTrendingMovies(value))
    else dispatch(searchMovies(searchText, value))
  }

  return (
    <>
      <Grid
        container
      >
        <Grid item xs={12} sm={8} >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {searchText === '' ?  <TrendingUp color="dark" /> :  <Search color="primary" />}
            <Typography variant="h6">
              <span className={classes.title}>{searchText === '' ? 'Trending' : `Search results for "${searchText}"`}</span>
              {
                searchText === '' ? '' : 
                <Tooltip title="Clear search!" aria-label="Clear search!">
                  <IconButton size="small" className={classes.clearButton} onClick={clearSearch}>
                    <Clear/>
                  </IconButton>
                </Tooltip>
              }
            </Typography>
          </Box>
        </Grid>
        {/* <Grid xs={12} sm={0}>123</Grid> */}
        <Grid item xs={12} sm={4}>
          <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
            <SearchInput handleSearch={handleSearch} value={searchText}/>
          </Box>
        </Grid>
      </Grid>
      <MovieResultsGrid page={page} handleSetPage={handleSetPage}/>
    </>
  )
}
