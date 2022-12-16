import { mdiThumbDownOutline, mdiThumbUpOutline } from '@mdi/js';
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
  return (
    <>
      <div
        className="movie-card mx-4 mb-6 h-80 w-96 transform-gpu cursor-pointer rounded-2xl  hover:scale-110 "
        style={{
          backgroundImage: `url(/assets/images/${movie.thumbnail})`,
        }}
        onMouseOver={() => setShowDiscription(true)}
        onMouseLeave={() => setShowDiscription(false)}
      >
        {showDiscription && (
          <div className=" relative top-44 overflow-hidden rounded-b-2xl  bg-black bg-opacity-90 pb-8 text-amber-300   ">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p>
              <span className="font-bold">Genre</span> {movie.category}
            </p>
            <div className="flex flex-row">
              <button
                className=" mr-2 cursor-pointer rounded-full border-2 bg-darkPurple-100 bg-opacity-30  p-4 font-bold text-white hover:bg-opacity-100 "
                onClick={() => addLike(movie.id)}
              >
                <Icon
                  path={mdiThumbUpOutline}
                  title="User Profile"
                  size={1}
                  color="white"
                />
                <p>{movie.likes}</p>
              </button>
              <button
                className=" cursor-pointer rounded-full border-2 bg-darkPurple-100 bg-opacity-30  p-4 font-bold text-white hover:bg-opacity-100 "
                onClick={() => addDislike(movie.id)}
              >
                <Icon
                  path={mdiThumbDownOutline}
                  title="User Profile"
                  size={1}
                  color="white"
                />
                <p>{movie.dislikes}</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieCard;
