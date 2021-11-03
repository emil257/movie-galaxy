import React from 'react'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, Grid, Typography, Chip } from '@mui/material';
import {useSelector} from 'react-redux'
import {isEmpty, isNull, isUndefined} from 'lodash'
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
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingTop: '60%'
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
  genre: {
    marginRight: 5,
    marginBottom: 5
  },
  releaseDate: {
    marginBottom: '5px !important'
  }
});

export default function AlertDialogSlide(props) {
  const classes = useStyles()
  const currentMovie = useSelector(state => state.Movies.currentMovie)
  const currentMovieVideos = useSelector(state => state.Movies.currentMovieVideos)
 
  const handleClose = () => {
    props.setOpen(false);
  }

  const returnMovieTrailer = () => {
    let trailer = currentMovieVideos.find(videos => videos.type === 'Trailer')
    if(isUndefined(trailer)) trailer = currentMovieVideos[0]
    switch(trailer.site) {
      case 'YouTube' : return `https://www.youtube.com/embed/${trailer.key}`
      case 'Vimeo' : return `https://player.vimeo.com/video/${trailer.key}`
      default : return ''
    }
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
        {
          isEmpty(currentMovieVideos) ?
          <img src={`https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`} alt={currentMovie.title} className={classes.imgBackdrop}/> :
          <div className={classes.videoContainer}>
            {
              props.open ? 
              <iframe
                title="dialog-video"
                id="video"
                src={returnMovieTrailer()}
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoPlay
                className={classes.video}
              /> : ''
            }
          </div>
        }
        <div className={classes.movieControllerContainer}>
          <MovieResultsItemActions {...props}/>
        </div>
        <DialogTitle className={classes.movieTitle}>{currentMovie.title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={9}>
              <DialogContentText id="alert-dialog-slide-description">
                {currentMovie.overview}
              </DialogContentText>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography className={classes.releaseDate}>
                Release{`: ${currentMovie.release_date}`}
              </Typography>
              <Typography>
                <span>Genres: </span>
                  {
                    isEmpty(currentMovie.genres) ? '' :
                    currentMovie.genres.map(g => {
                      return (
                        <Chip label={g.name} size="small" className={classes.genre}/>
                      )
                    })
                  }
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
  );
}