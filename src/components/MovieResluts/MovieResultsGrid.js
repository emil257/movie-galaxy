import React from 'react'
import { Grid, Pagination } from '@mui/material'
import { useSelector } from 'react-redux'
import {isEmpty} from 'lodash'
import MovieResultItem from './MovieReslutItem'
import { isUndefined } from 'lodash'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gridContainer : {
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  
});

export default function MovieResultsGrid(props) {
  const classes = useStyles()

  const [page, setPage] = React.useState(props.page)

  const movieResults = useSelector(state => state.Movies.movieResults)
  const movieResultsCount = useSelector(state => state.Movies.movieResultsCount)

  const handleSetPage = (event, value) => {
    setPage(value)
    props.handleSetPage(value)
  }

  const processAmmountOfPages = (count) => {
    return Math.ceil(count / 20)
  }

  React.useEffect(() => {
    setPage(props.page)
  }, [props.page])

  return (
    <div className={classes.gridContainer}>
      <Grid container xs={12} spacing={2} >
        {
          isEmpty(movieResults) ? '':
          movieResults.map(movie => <MovieResultItem movie={movie}/>)
        }
        {
          !isUndefined(props.page) && !isUndefined(props.handleSetPage) ?
          <Grid item xs={12} container justifyContent="center">
            <Pagination count={processAmmountOfPages(movieResultsCount)} color="primary" page={page} onChange={handleSetPage} />
          </Grid> : ''
        }
      </Grid>
      
    </div>
  )
}
