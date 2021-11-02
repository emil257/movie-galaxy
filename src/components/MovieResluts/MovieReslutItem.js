import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import {getMovieById} from 'actions'
import { makeStyles } from '@mui/styles';
import MovieResultsItemActions from './MovieResultsItemActions';
import MovieDetailsDialog from './MovieDetailsDialog';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
    }
  },
});

export default function MovieReslutItem(props) {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const handleGetMovieDetails = () => {
    dispatch(getMovieById(props.movie.id))
    setDialogOpen(true)
  }

  return (
    <>
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.card} onClick={handleGetMovieDetails}>
        <CardMedia
          component="img"
          height="440"
          image={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          alt="green iguana"
        />
       <MovieResultsItemActions {...props}/>
      </Card>
    </Grid>
    <MovieDetailsDialog {...props} open={dialogOpen} setOpen={setDialogOpen}/>
    </>
  )
}
