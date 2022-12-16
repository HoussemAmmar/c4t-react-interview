import React from 'react';

import MovieCard from '@/components/movie-card';
import type { Movie } from '@/types/movies.types';

const MoviesList: React.FC<{ title: string; movies: Movie[] }> = ({
  title,
  movies,
}) => {
  return (
    <div className="bg-darkPurple-800  shadow">
      <h1>{title}</h1>
      <div className="flex flex-wrap">
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
