import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";   


function MovieCard({ movie }) {
  return (
  <div className="min-w-[180px] rounded-lg hover:border-[4px] border-gray-600 cursor-pointer overflow-hidden">
  <img
    className="w-full h-full object-cover"
    src={IMAGE_BASE_URL + movie.poster_path}
    alt={movie.title}
  />
</div>

  );
}

export default MovieCard;
