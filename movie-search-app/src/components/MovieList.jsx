
function MovieList({ movies }) {

  return (
    <>
      {movies && movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
        </div>
      ))}
    </>
  );
}

export default MovieList;