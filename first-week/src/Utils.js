const OMDB_API_KEY = '';
const API_URL = 'http://www.omdbapi.com'

export const getMoviesBySearchTerm = async (searchTerm = '') => {
    const url = `${API_URL}/?apikey=${OMDB_API_KEY}&s=${searchTerm}`;
    const response = await fetch(url);
    const movies = await response.json();
    return movies;
  }
  
  export const getMovieDetailsById = async (movieId) => {
    const url = `${API_URL}/?apikey=${OMDB_API_KEY}&i=${movieId}`;
    const response = await fetch(url);
    const movie = await response.json();
    return movie;
  }