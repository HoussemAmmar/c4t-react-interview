import { mdiCloseBox, mdiThumbDownOutline, mdiThumbUpOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';

import { useMoviesStore } from '@/store/movies.store';
import type { Movie } from '@/types/movies.types';

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [showDiscription, setShowDiscription] = useState(false);
  const moviesStore: any = useMoviesStore();
  const addLike = (id: string) => {
    moviesStore.addLike(id);
  };
  const addDislike = (id: string) => {
    moviesStore.addDislike(id);
  };

  const deleteMovie = (id: string) => {
    moviesStore.deleteMovie(id);
  };
  return (
    <>
      <div
        className="movie-card  md: relative mx-4 my-10 transform-gpu cursor-pointer rounded-2xl  hover:scale-110 md:h-128 md:w-132 xl:h-80  xl:w-96 "
        style={{
          backgroundImage: `url(/assets/images/${movie.thumbnail})`,
        }}
        onMouseOver={() => setShowDiscription(true)}
        onMouseLeave={() => setShowDiscription(false)}
      >
        {showDiscription && (
          <div className=" absolute -bottom-1 w-full rounded-b-2xl  border-black bg-darkPurple-800 p-2 pb-8 text-amber-300 opacity-70 ">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p>
              <span className="font-bold">Genre</span> {movie.category}
            </p>
            <div className="flex flex-row items-center font-semibold text-white">
              <button
                className=" mr-1 flex cursor-pointer rounded-full border-2  p-2 font-bold text-white hover:scale-110  "
                onClick={() => addLike(movie.id)}
              >
                <Icon
                  path={mdiThumbUpOutline}
                  title="User Profile"
                  size={1}
                  color="white"
                />
              </button>
              <p className="pr-5">{movie.likes}</p>
              <button
                className=" flex cursor-pointer rounded-full border-2 p-2  font-bold text-white  "
                onClick={() => addDislike(movie.id)}
              >
                <Icon
                  path={mdiThumbDownOutline}
                  title="User Profile"
                  size={1}
                  color="white"
                />
              </button>
              <p className="px-2">{movie.dislikes}</p>

              <button
                className=" cursor-pointer rounded-full border-2 bg-darkPurple-100 bg-opacity-30  p-4 font-bold text-white hover:bg-opacity-100 "
                onClick={() => deleteMovie(movie.id)}
              >
                <Icon
                  path={mdiCloseBox}
                  title="delete movie"
                  size={1}
                  color="white"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieCard;
