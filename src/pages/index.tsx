import React, { useEffect } from 'react';

import CoverMovie from '@/components/cover-movie';
import MoviesList from '@/components/movies-list';
import { Meta } from '@/layouts/Meta';
import { useMoviesStore } from '@/store/movies.store';
import { Main } from '@/templates/Main';

const Index = () => {
  const moviesStore: any = useMoviesStore();
  const { movies, loader } = moviesStore;

  useEffect(() => {
    moviesStore.getMovies();
  }, []);

  return (
    <Main
      meta={<Meta title="c4t react interview" description="Next js test" />}
    >
      <CoverMovie />

      <div className="bg-darkPurple-800  shadow">
        {loader ? (
          <p>Loading..</p>
        ) : (
          <>
            <MoviesList title={'Movies'} movies={movies} />
          </>
        )}
      </div>
    </Main>
  );
};

export default Index;
