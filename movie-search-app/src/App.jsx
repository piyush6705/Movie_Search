import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchMovies(searchTerm) {
    try {
      setLoading(true);
      setError("");

      const apiKey = import.meta.env.VITE_OMDB_API_KEY;

      // Search movies
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );

      const data = await response.json();

      if (data.Response === "False") {
        setMovies([]);
        setError(data.Error);
        return;
      }

      // Get details for every movie
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie) => {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
          );

          return await res.json();
        })
      );

      setMovies(detailedMovies);
    } catch (err) {
      setError("Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(query) {
    fetchMovies(query);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      <MovieList movies={movies} />
    </>
  );
}

export default App;