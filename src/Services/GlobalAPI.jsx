import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "4059d536ae4c498acf8898553f89b232"; 
//https://api.themoviedb.org/3/trending/all/day?api_key=4059d536ae4c498acf8898553f89b232

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=4059d536ae4c498acf8898553f89b232';

const getTrendingMovies = axios.get(movieBaseUrl + "/trending/all/day?api_key="+apiKey);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default {
     getTrendingMovies,
     getMovieByGenreId
    };
