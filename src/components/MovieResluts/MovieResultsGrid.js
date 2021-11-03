import React from 'react'
import { Grid, Pagination } from '@mui/material'
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
      <Grid container spacing={2} >
        {
          isEmpty(props.movies) ? '' :
          props.movies.map((movie, index) => <MovieResultItem key={index} movie={movie}/>)
        }
        {
          !isUndefined(props.page) && !isUndefined(props.handleSetPage) ?
          <Grid item xs={12} container justifyContent="center">
            <Pagination count={processAmmountOfPages(props.count)} color="primary" page={page} onChange={handleSetPage} />
          </Grid> : ''
        }
      </Grid>
      
    </div>
  )
}
