import React, { useEffect, useState } from 'react';
import GlobalAPI from '../Services/GlobalAPI';
import MovieCard from './MovieCard';

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (genreId) {
      getMovieByGenreId();
    }
  }, [genreId]);

  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId)
      .then((response) => {
        setMovieList(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching movies by genre:", error);
      });
  };

  return (
    <div className="flex gap-8 overflow-x-auto scrollbar-hide py-4 scroll-smooth">
      {movieList.map((item) => (
        <MovieCard movie={item} />
      ))}
    </div>
  );
}

export default MovieList;
