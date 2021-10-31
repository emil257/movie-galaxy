import React from 'react'
import {AppBar, Toolbar,IconButton } from '@mui/material';
import {Menu} from '@mui/icons-material'

export default function Navigation() {
  return (
    <AppBar color="primary">
      <Toolbar >
        <IconButton color="inherit">
          <Menu/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
