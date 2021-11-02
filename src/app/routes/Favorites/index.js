import React from 'react'
import { useDispatch } from 'react-redux'
import { getTrendingMovies} from 'actions'
import { Typography, Box } from '@mui/material'
import MovieResultsGrid from '../../../components/MovieResluts/MovieResultsGrid'


export default function HomePage() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getTrendingMovies())
  }, [dispatch])


  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography variant="h6">
          Favorites
        </Typography>
      </Box>
      <MovieResultsGrid/>
    </>
  )
}
