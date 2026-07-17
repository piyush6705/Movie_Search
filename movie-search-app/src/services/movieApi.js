const API_KEY = import.meta.env.VITE_OMDB_API_KEY;


export async function searchMovies(searchTerm) {

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`
    );

    const data = await response.json();


    if(data.Response === "False"){
        throw new Error(data.Error);
    }


    const detailedMovies = await Promise.all(
        data.Search.map(async(movie)=>{

            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
            );

            return await response.json();
        })
    );


    return detailedMovies;
}