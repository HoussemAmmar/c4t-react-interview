import React, { useEffect, useState } from 'react';

import MovieCard from '@/components/movie-card';
import type { Movie } from '@/types/movies.types';

const MoviesList: React.FC<{ title: string; movies: Movie[] }> = ({
  title,
  movies,
}) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const existingCategories = movies.map((movie: any) => movie.category);
    const categories: any = existingCategories.filter(
      (element: any, index: number) => {
        return existingCategories.indexOf(element) === index;
      }
    );
    if (categories.length !== categoryList.length) {
      setCategoryList(categories);
    }
  }, [categoryList]);
  // @ts-ignore
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
      <input className="p-3" onChange={(e) => setSearch(e.target.value)} />
      <div className="flex flex-wrap">
        {movies
          .filter((el) => {
            if (category.length === 0) {
              return el;
            }
            let expression = '';
            category.forEach((e, index) => {
              expression += `el.category === '${e}'${
                index === category.length - 1 ? '' : ' || '
              }`;
            });
            return eval(expression);
          })
          .filter((movie) =>
            movie.title.toUpperCase().startsWith(search.toUpperCase())
          )
          .map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
