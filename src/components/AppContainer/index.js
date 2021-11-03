import React from 'react'
import {Container} from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  container: {
    paddingTop: '2rem',
    minHeight: 'calc(100vh - 48px)',
  },
});
export default function AppContainer(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      {props.children}
    </Container>
  )
}
