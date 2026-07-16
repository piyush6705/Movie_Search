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
    <form onSubmit={handleSubmit}>
      <input className="searchBar" type="text" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit" className="buttonIcon" >🔍</button>
    </form>
  );
}

export default SearchBar;
