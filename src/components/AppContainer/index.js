import React from 'react'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {
    paddingTop: 64
  },
});

export default function Container(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}
