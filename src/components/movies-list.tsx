import React, { useEffect, useState } from 'react';

import MovieCard from '@/components/movie-card';
import type { Movie } from '@/types/movies.types';

const MoviesList: React.FC<{ title: string; movies: Movie[] }> = ({
  title,
  movies,
}) => {
  const [category, setCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const existingCategories = movies.map((movie: any) => movie.category);
    const categories: any = existingCategories.filter(
      (element: any, index: number) => {
        return existingCategories.indexOf(element) === index;
      }
    );
    setCategoryList(categories);
  }, [categoryList]);
  return (
    <div className="bg-darkPurple-800  shadow">
      <h1>{title}</h1>
      <select
        className=" my-36 ml-24 w-full"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option className="text-black" value={''}>
          select category
        </option>
        {categoryList.map((el: string, index: number) => (
          <option key={index} className="text-black" value={el}>
            {el}
          </option>
        ))}
      </select>
      <div className="flex flex-wrap">
        {movies
          .filter((el) => (category === '' ? el : el.category === category))
          .map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
