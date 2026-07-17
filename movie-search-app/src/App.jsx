
import SearchBar from './components/SearchBar';



import './App.css'
import { useState } from 'react';

function App() {
  

  const [movies, setMovies] =useState([]);
  const [loading,setLoading]= useState(true);
  const [error, setError] = useState("");

  async function fetchMovies(searchTerm) {
    setLoading(true);

    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  
    const url=  `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    const response = await fetch(url);

  const data = await response.json();

  console.log(data);

  }

  function handleSearch(query) {
    fetchMovies(query);
  }

  return (
    
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default App;