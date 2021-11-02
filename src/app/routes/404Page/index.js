import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageNotFoundTitle : {
    fontSize: 40,
    fontWeight: 'bold'
  }
});

export default function PageNotFound() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1 className={classes.pageNotFoundTitle}>404 not found...</h1>
    </div>
  )
}
