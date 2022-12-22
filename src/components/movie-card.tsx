import { mdiClose, mdiThumbDownOutline, mdiThumbUpOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';

import { useMoviesStore } from '@/store/movies.store';
import type { Movie } from '@/types/movies.types';

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [showDiscription, setShowDiscription] = useState(false);
  const moviesStore: any = useMoviesStore();

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisLiked] = useState(false);

  const addLike = (id: string) => {
    if (isLiked) {
      moviesStore.removeLike(id);
      setIsLiked(false);
      return;
    }
    if (isDisliked) {
      moviesStore.removeDislike(id);
      setIsDisLiked(false);
      moviesStore.addLike(id);
      setIsLiked(true);
    } else {
      moviesStore.addLike(id);
      setIsLiked(true);
    }
  };
  const addDislike = (id: string) => {
    if (isDisliked) {
      moviesStore.removeDislike(id);
      setIsDisLiked(false);
      return;
    }
    if (isLiked) {
      moviesStore.removeLike(id);
      setIsLiked(false);

      moviesStore.addDislike(id);
      setIsDisLiked(true);
    } else {
      moviesStore.addDislike(id);
      setIsDisLiked(true);
    }
  };

  const deleteMovie = (id: string) => {
    moviesStore.deleteMovie(id);
  };
  return (
    <>
      <div
        id="card"
        className="movie-card  relative mx-4 my-10 h-72 w-80 transform-gpu cursor-pointer rounded-2xl hover:scale-110 sm:h-80 sm:w-96 md:h-128 md:w-132 xl:h-80  xl:w-96 "
        style={{
          backgroundImage: `url(/assets/images/${movie.thumbnail})`,
        }}
        onMouseOver={() => setShowDiscription(true)}
        onMouseLeave={() => setShowDiscription(false)}
      >
        {showDiscription && (
          <div>
            <div className=" absolute -bottom-1 w-full rounded-b-2xl  border-black bg-darkPurple-800 bg-opacity-70 p-4 text-amber-300 ">
              <h1 className="text-xl font-bold 3xs:text-3xl 2xs:text-4xl">
                {movie.title}
              </h1>
              <p className="text-sm">
                <span className="font-bold">Genre | </span> {movie.category}
              </p>
              <div className="mt-5 flex flex-row items-baseline font-semibold text-white">
                <button
                  className={` mr-1 flex  scale-90 cursor-pointer rounded-full  border-2 border-amber-100 p-2 font-bold text-white hover:scale-100  ${
                    isLiked && '  bg-darkPurple-800 '
                  }`}
                  onClick={() => addLike(movie.id)}
                >
                  <Icon
                    path={mdiThumbUpOutline}
                    title="User Profile"
                    size={1}
                    color="#ffecb3"
                  />
                </button>
                <p className=" pr-5 text-amber-100">{movie.likes}</p>
                <button
                  className={` flex scale-90 cursor-pointer rounded-full border-2 border-amber-100  p-2 font-bold text-white hover:scale-100   ${
                    isDisliked && ' bg-darkPurple-800'
                  }`}
                  onClick={() => addDislike(movie.id)}
                >
                  <Icon
                    path={mdiThumbDownOutline}
                    title="User Profile"
                    size={1}
                    color="#ffecb3"
                  />
                </button>
                <p className="px-2 text-amber-100">{movie.dislikes}</p>
              </div>
            </div>
            <button
              className=" absolute top-3 right-3 cursor-pointer rounded-full bg-darkPurple-800 bg-opacity-70  p-2 font-bold text-white hover:border-none hover:bg-opacity-100 "
              onClick={() => deleteMovie(movie.id)}
            >
              <Icon
                path={mdiClose}
                title="delete movie"
                size={1}
                color="white"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieCard;
