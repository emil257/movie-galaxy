import React from 'react'
import { Link } from "react-router-dom";
import {AppBar, Toolbar,IconButton,Container,Drawer,ListItem,ListItemIcon,ListItemText,List,Box,Typography } from '@mui/material';
import {Menu } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';
import { history } from 'store';

import {routes} from '../../app/routes/routeData'

const useStyles = makeStyles({
  _toolbar: {
    paddingLeft: '0px !important',
  },
  logo: {
    paddingLeft: 10,
    color: 'white',
    textDecoration: 'none',
    '&:active': {
      color: 'white',
    }
  },
  container: {
    padding: '0 16px !important'
  },
});


export default function Navigation() {
  const classes = useStyles()

  const [openDrawer, setOpenDrawer] = React.useState(false)

  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  } 

  const handleCloseDrawer = () => {
    setOpenDrawer(false)
  } 

  return (
    <>
      <AppBar color="primary" position="sticky">
        <Container maxWidth="lg" className={classes.container}>
            <Toolbar variant="dense" className={classes._toolbar}>
              <IconButton color="inherit" onClick={handleOpenDrawer}>
                <Menu/>
              </IconButton>
                <Typography 
                  variant="h6"
                  noWrap
                  component="div"
                  >
                  <Link to="/" className={classes.logo}>MovieGalaxy</Link></Typography> 
              
            </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleCloseDrawer}
      >
        <Box
          sx={{ width: 250, paddingTop: 5 }} 
        >
          <List>
            {
              routes.map((r, index) => {
                if(r.path === '*') return ''
                return (
                  <ListItem button key={index} component={Link} onClick={handleCloseDrawer} to={r.path} selected={r.path === history.location.pathname}>
                    <ListItemIcon>{r.icon}</ListItemIcon>
                    <ListItemText primary={r.text}/>
                  </ListItem>
                )
              })
            }
          </List>
        </Box>
      </Drawer>
    </>
  )
}
