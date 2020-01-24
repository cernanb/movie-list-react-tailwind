import React, { useEffect, useState } from 'react'
import { movieDataSanitizer } from './utils'
import Pagination from './Pagination'
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
      <div className="my-8">
        <div className="inline-block">
          <ul className="flex list-reset border border-grey-light rounded font-sans">
            <li>
              <button
                className={`block hover:text-white ${listType === 'popular' &&
                  'bg-blue-500 text-white'} hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2 cursor-pointer`}
                onClick={() => {
                  setListType('popular')
                  setPage(1)
                }}
              >
                Popular
              </button>
            </li>
            <li>
              <button
                className={`block hover:text-white ${listType === 'upcoming' &&
                  'bg-blue-500 text-white'} hover:bg-blue-500 text-blue border-r border-grey-light px-3 py-2 cursor-pointer`}
                onClick={() => {
                  setListType('upcoming')
                  setPage(1)
                }}
              >
                Upcoming
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      <MovieList movies={movies} />
    </div>
  )
}

export default App
