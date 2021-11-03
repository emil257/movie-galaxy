import React from 'react'
import {TextField, IconButton} from '@mui/material';
import {SearchOutlined} from '@mui/icons-material'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  searchFeild: {
    maxWidth: 400
  }
});

export default function SearchInput(props) {
  const classes = useStyles()

  const [text, setText] = React.useState(props.value)

  const handleSearch = (e) => {
    if(e.keyCode === 13 && text !== '') {
      props.handleSearch(text)
    }
  }

  React.useEffect(() => {
    setText(props.value)
  },[props.value])

  return (
    <TextField
      className={classes.searchFeild}
      fullWidth
      size="small"
      value={text}
      placeholder="Search..."
      onKeyDown={handleSearch}
      onChange={e => setText(e.target.value)}
      InputProps={{
        endAdornment: (
          <IconButton onClick={() => text !== '' ? props.handleSearch(text) : console.log('So search param')}>
            <SearchOutlined />
          </IconButton>
        ),
      }}
    />
  )
}
