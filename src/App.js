import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import MovieList from './MovieList'

function App() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=${page}`
        )
        const data = await res.json()
        setMovies(data.results)
        setTotalPages(data.total_pages)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [page])

  const pages = Array.from(Array(totalPages).keys())
  return (
    <div class="container mx-auto px-6">
      <Pagination page={page} setPage={setPage} pages={pages} />
      <MovieList movies={movies} />
    </div>
  )
}

export default App
