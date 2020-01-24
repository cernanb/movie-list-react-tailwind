import React from 'react'
import Moment from 'react-moment'

const MovieListItem = ({ movie }) => {
  return (
    <tr>
      <td className="border px-4 py-2">
        {movie.title} <img src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} alt={movie.title} />
      </td>
      <td className="border px-4 py-2">{movie.overview}</td>
      <td className="border px-4 py-2">{movie.popularity}</td>
      <td className="border px-4 py-2">
        <Moment format="MM/DD/YYYY">{movie.release_date}</Moment>
      </td>
    </tr>
  )
}

export default MovieListItem
