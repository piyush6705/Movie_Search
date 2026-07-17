import {useState} from "react";
import {searchMovies} from "../services/movieApi";


function useMovies(){

    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");


    async function fetchMovies(query){

        try{

            setLoading(true);
            setError("");

            const results = await searchMovies(query);

            setMovies(results);

        }
        catch(error){

            setMovies([]);
            setError(error.message);

        }
        finally{

            setLoading(false);

        }

    }


    return {
        movies,
        loading,
        error,
        fetchMovies
    }

}


export default useMovies;