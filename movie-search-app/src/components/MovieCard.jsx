  const PLACEHOLDER_POSTER =
    "https://placehold.co/300x450?text=No+Poster";
    
function MovieCard({ movie }) {

  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : PLACEHOLDER_POSTER}
        alt={movie.Title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = PLACEHOLDER_POSTER;
        }}
      />

      <h2>{movie.Title}</h2>

      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Type:</strong> {movie.Type}</p>
      <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Runtime:</strong> {movie.Runtime}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>

      <a
        href={`https://www.imdb.com/title/${movie.imdbID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on IMDb
      </a>
    </div>
  );

}

export default MovieCard;