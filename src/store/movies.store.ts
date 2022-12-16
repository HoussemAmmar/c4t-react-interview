import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

import type { MoviesStoreType } from '@/types/movies.types';

import { movies$ } from '../../data/movies';

export const useMoviesStore = create<MoviesStoreType>((set, get) => ({
  movies: [],
  loader: false,
  error: '',
  getMovies: async () => {
    try {
      set(() => ({ loader: true }));
      const data: any = await movies$;
      set(() => ({ movies: data }));
      set(() => ({ loader: false }));
    } catch {
      set(() => ({ loader: false }));
      set(() => ({ error: 'Failed to load data' }));
    }
  },
}));

mountStoreDevtool('useMoviesStore', useMoviesStore as any);
