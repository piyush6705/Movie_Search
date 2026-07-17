import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query , setQuery] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    if (query.trim()) {
      onSearch(query.trim());
    }
    
  }
  
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        🔍
      </button>
    </form>
  );
}

export default SearchBar;
