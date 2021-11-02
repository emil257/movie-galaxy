import React from 'react'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide} from '@mui/material';
import {useSelector} from 'react-redux'
import {isNull} from 'lodash'
import { makeStyles } from '@mui/styles';
import {Close} from '@mui/icons-material'
import MovieResultsItemActions from './MovieResultsItemActions'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  closeBtn: {
    position: 'absolute !important',
    top: 10,
    right: 10
  },
  movieTitle: {
    paddingTop: '0px !important'
  },
  movieControllerContainer: {
    padding: '0 8px'
  },
  imgBackdrop: {
    minHeight: 50
  }
});

export default function AlertDialogSlide(props) {
  const classes = useStyles()
  const currentMovie = useSelector(state => state.Movies.currentMovie)
 
  const handleClose = () => {
    props.setOpen(false);
  }

  if(isNull(currentMovie)) return ''

  return (
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-slide-description"
      >
        <IconButton onClick={handleClose} className={classes.closeBtn} color="secondary">
          <Close/>
        </IconButton>
        <img src={`https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`} className={classes.imgBackdrop}/>
        <div className={classes.movieControllerContainer}>
          <MovieResultsItemActions {...props}/>
        </div>
        <DialogTitle className={classes.movieTitle}>{currentMovie.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {currentMovie.overview}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
  );
}