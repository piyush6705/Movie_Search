import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Header from "./components/Header";

import useMovies from "./hooks/useMovies";

import "./App.css";


function App(){

    const {
        movies,
        loading,
        error,
        fetchMovies
    } = useMovies();



    return(

        <div className="app-container">


            <Header/>


            <main className="app-main">

                <SearchBar 
                    onSearch={fetchMovies}
                />


                {loading && 
                    <h2 className="status-message">
                        Loading...
                    </h2>
                }



                {error &&
                    <h2 className="status-message error-message">
                        {error}
                    </h2>
                }



                <MovieList movies={movies}/>


            </main>


        </div>

    )

}


export default App;