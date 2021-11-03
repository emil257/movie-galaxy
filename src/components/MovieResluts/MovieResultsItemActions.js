import React from 'react'
import { IconButton, Rating, Tooltip, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import {FavoriteBorder, Favorite, MoreVert, Add, Remove } from '@mui/icons-material'
import {addMovieToFavorites, removeMovieToFavorites, addMovieToWatchlist, removeMovieToWatchlist} from 'actions'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 5px 5px 10px'
  }
});

export default function MovieResultsItemActions(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const movieFavoritesArr = useSelector(state => state.Movies.movieFavoritesArr)
  const movieWatchlist = useSelector(state => state.Movies.movieWatchlist)
  const [isInWatchlist, setisInWatchlist] = React.useState(movieWatchlist.find(mFA => mFA.id === props.movie.id))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickOpenMoreActions = (event) => {
    setAnchorEl(event.currentTarget);
    setisInWatchlist(movieWatchlist.find(mFA => mFA.id === props.movie.id))
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const processRatingToStars = (rating) => {
    return 5 * (rating/10)
  }

  const handleFavoriteMovie = () => {
    const isFavorite = movieFavoritesArr.find(mFA => mFA === props.movie.id)
    if(!isFavorite) dispatch(addMovieToFavorites(props.movie.id))
    else dispatch(removeMovieToFavorites(props.movie.id))
  }
  const handleAddToWatchlist = () => {
    setAnchorEl(null);
    const _isInWatchlist = movieWatchlist.find(mFA => mFA.id === props.movie.id)
    if(!_isInWatchlist) dispatch(addMovieToWatchlist(props.movie))
    else dispatch(removeMovieToWatchlist(props.movie.id))
  };

  return (
    <>
      <div className={classes.cardActions}>
        <Rating name="read-only" value={processRatingToStars(props.movie.vote_average)} readOnly precision={0.1} />
        <div>
          <Tooltip title="Add to favorites" arial-label="Add to favorites">
            <IconButton color="primary" size="small" onClick={handleFavoriteMovie}>
              {movieFavoritesArr.find(mFA => mFA === props.movie.id) ? <Favorite/> : <FavoriteBorder/>}
            </IconButton>
          </Tooltip>
          <Tooltip title="More actions" arial-label="More actions">
            <IconButton color="primary" size="small" onClick={handleClickOpenMoreActions}>
              <MoreVert/>
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // disableScrollLock={true}
      >
        <MenuItem onClick={handleAddToWatchlist}>
          <ListItemIcon>
            { isInWatchlist ? <Remove fontSize="small"/> : <Add fontSize="small"/>}
          </ListItemIcon>
          <ListItemText>{ isInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}
