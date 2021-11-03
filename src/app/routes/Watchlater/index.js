import React from 'react'
import { Typography, Box,Grid  } from '@mui/material'
import MovieResultsGrid from '../../../components/MovieResluts/MovieResultsGrid'
import {VisibilityOutlined} from '@mui/icons-material'
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';

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

  const movieWatchlist = useSelector(state => state.Movies.movieWatchlist)

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
            <VisibilityOutlined />
            <Typography variant="h6">
                <span className={classes.title}>Watchlist</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <MovieResultsGrid movies={movieWatchlist}/>
    </>
  )
}
