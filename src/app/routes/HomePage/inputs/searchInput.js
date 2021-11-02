import React from 'react'
import {TextField, IconButton} from '@mui/material';
import {SearchOutlined} from '@mui/icons-material'

export default function SearchInput(props) {

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
