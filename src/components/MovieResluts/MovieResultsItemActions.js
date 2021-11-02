import React from 'react'
import { IconButton, Rating } from '@mui/material'
import {FavoriteBorder, MoreVert} from '@mui/icons-material'

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

  const processRatingToStars = (rating) => {
    return 5 * (rating/10)
  }

  return (
    <div className={classes.cardActions}>
    <Rating name="read-only" value={processRatingToStars(props.movie.vote_average)} readOnly precision={0.1} />
    <div>
      <IconButton color="primary" size="small">
        <FavoriteBorder/>
      </IconButton>
      <IconButton color="primary" size="small">
        <MoreVert/>
      </IconButton>
    </div>
  </div>
  )
}
