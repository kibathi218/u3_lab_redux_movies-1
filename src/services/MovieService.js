import Client from "./";

export const GetMovies = async () => {

    try{
        const res = await Client.get(`/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        console.log(res.data.results);
        return (res.data.results)
    } catch (error) {
        throw (error)
    }
} 

export const GetMovieDetails = async () => {

    try {
        const res = await Client.get(`/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        console.log(res.data.results);
        return (res.data.results)
    } catch (error) {
        throw (error)
    }
}

