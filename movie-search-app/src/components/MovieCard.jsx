  const PLACEHOLDER_POSTER =
    "https://placehold.co/300x450?text=No+Poster";

function MovieCard({ movie }) {

  return (
    <article className="movie-card">
      <img
        className="movie-poster"
        src={movie.Poster !== "N/A" ? movie.Poster : PLACEHOLDER_POSTER}
        alt={movie.Title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = PLACEHOLDER_POSTER;
        }}
      />

      <div className="movie-card-content">
        <h2 className="movie-title">{movie.Title}</h2>

        <p className="movie-detail">
          <strong>Year:</strong> {movie.Year}
        </p>
        <p className="movie-detail">
          <strong>Type:</strong> {movie.Type}
        </p>
        <p className="movie-detail">
          <strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}
        </p>
        <p className="movie-detail">
          <strong>Director:</strong> {movie.Director}
        </p>
        <p className="movie-detail">
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p className="movie-detail">
          <strong>Runtime:</strong> {movie.Runtime}
        </p>
        <p className="movie-detail">
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p className="movie-detail plot-text">
          <strong>Plot:</strong> {movie.Plot}
        </p>

        <a
          className="movie-link"
          href={`https://www.imdb.com/title/${movie.imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on IMDb
        </a>
      </div>
    </article>
  );

}

export default MovieCard;