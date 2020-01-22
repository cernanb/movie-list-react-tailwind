export const movieDataSanitizer = movies => {
  return movies.map(({ id, title, poster_path, popularity, release_date, overview }) => ({
    id,
    title,
    poster_path,
    popularity,
    releaseDate: new Date(release_date),
    overview
  }))
}
