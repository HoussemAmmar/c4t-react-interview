import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";

import type { MoviesStoreType } from "@/types/movies.types";

import { movies$ } from "../../data/movies";

export const useMoviesStore = create<MoviesStoreType>((set, get) => ({
  movies: [],
  loader: false,
  error: "",
  getMovies: async () => {
    try {
      set(() => ({ loader: true }));
      const data: any = await movies$;
      set(() => ({ movies: data }));
      set(() => ({ loader: false }));
    } catch {
      set(() => ({ loader: false }));
      set(() => ({ error: "Failed to load data" }));
    }
  },
  addLike: (id: string) => {
    const { movies } = get();
    const index = movies.findIndex((movie: any) => {
      return movie.id === id;
    });

    // @ts-ignore
    movies[index].likes += 1;
    set(() => ({ movies }));
  },

  addDislike: (id: string) => {
    const { movies } = get();
    const index = movies.findIndex((movie: any) => {
      return movie.id === id;
    });

    // @ts-ignore
    movies[index].dislikes += 1;
    set(() => ({ movies }));
  },
  deleteMovie: (id: string) => {
    const { movies } = get();
    const newMovies = movies.filter((movie) => {
      return movie.id !== id;
    });
    set(() => ({ movies: newMovies }));
  },
}));

mountStoreDevtool("useMoviesStore", useMoviesStore as any);
