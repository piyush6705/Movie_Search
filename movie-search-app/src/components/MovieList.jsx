import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </>
  );
}

export default MovieList;