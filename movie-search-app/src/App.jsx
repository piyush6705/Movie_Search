
import SearchBar from './components/SearchBar';

import viteLogo from './assets/vite.svg'

import './App.css'

function App() {
  const handleSearch =(query) => {
    console.log(query);
  };

  return (
    
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;