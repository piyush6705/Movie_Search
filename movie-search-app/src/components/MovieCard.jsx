
function MovieCard({ movie }) {
  movie.Title
  movie.Year
  movie.Poster
  movie.Type
  movie.imdbID

  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-poster"
      />

      <h3>{movie.Title}</h3>

      <p><strong>Year:</strong> {movie.Year}</p>

      <p><strong>Type:</strong> {movie.Type}</p>

      <a
        href={`https://www.imdb.com/title/${movie.imdbID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on IMDb
      </a>

    </div>
  );
};

export default MovieCard;