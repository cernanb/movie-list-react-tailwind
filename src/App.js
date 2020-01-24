import React, { useEffect, useState } from 'react'
import { movieDataSanitizer } from './utils'
import Pagination from './Pagination'
import ListTypeNavigation from './ListTypeNavigation'
import MovieList from './MovieList'

const listTypeMapping = {
  upcoming: '/movie/upcoming',
  popular: '/movie/popular'
}

function App() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [listType, setListType] = useState('popular')
  const [totalResults, setTotalResults] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3${listTypeMapping[listType]}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=${page}`
        )
        const data = await res.json()
        setMovies(movieDataSanitizer(data.results))
        setTotalResults(data.total_results)
        setTotalPages(data.total_pages)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [page, listType])
  return (
    <div className="container mx-auto px-6">
      <div className="w-48 my-8 mx-auto pt-6  text-center text-2xl text-blue-700">{listType.toUpperCase()} MOVIES</div>
      <div className="w-48 mx-auto pt-6  text-center text-blue-500">{totalResults} Results</div>

      <ListTypeNavigation listType={listType} setListType={setListType} setPage={setPage} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      <MovieList movies={movies} />
    </div>
  )
}

export default App
