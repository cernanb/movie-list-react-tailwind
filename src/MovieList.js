import React from 'react'
import MovieListItem from './MovieListItem'

const MovieList = ({ movies }) => {
  function renderMovies(movies) {
    return movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)
  }
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="w-1/6 px-4 py-2">Title</th>
          <th className="w-1/2 px-4 py-2">Overview</th>
          <th className="w-1/4 px-4 py-2">Popularity</th>
          <th className="w-1/4 px-4 py-2">Release Date</th>
        </tr>
      </thead>
      <tbody>{renderMovies(movies)}</tbody>
    </table>
  )
}

export default MovieList
